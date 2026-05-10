'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  Zap,
  GitBranch,
  DollarSign,
  Shield,
  Users,
  Workflow,
  Store,
  TrendingUp,
  ArrowRight,
  Mail,
  Globe,
  Rocket,
  Handshake,
  User,
  Code2,
  BarChart3,
} from 'lucide-react';

/* ─── Constants ─── */

const TOTAL_SLIDES = 15;
const ANIMATION_LOCKOUT = 500;
const SWIPE_THRESHOLD = 50;
const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

/* ─── Animated Number ─── */

function AnimatedNumber({
  value,
  prefix,
  suffix,
  active,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  active: boolean;
}) {
  const [display, setDisplay] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!active || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Number((eased * value).toFixed(value % 1 !== 0 ? 1 : 0)));
      if (current >= steps) {
        setDisplay(value);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [active, value]);

  return (
    <span>
      {prefix || ''}
      {display}
      {suffix || ''}
    </span>
  );
}

/* ─── Slide wrapper ─── */

function Slide({
  index,
  currentSlide,
  children,
  className = '',
}: {
  index: number;
  currentSlide: number;
  children: React.ReactNode;
  className?: string;
}) {
  const isActive = currentSlide === index;
  const direction = index > currentSlide ? 1 : -1;

  return (
    <motion.section
      data-slide={index}
      className={`deck-slide absolute inset-0 flex items-center justify-center overflow-hidden ${className}`}
      initial={false}
      animate={{
        opacity: isActive ? 1 : 0,
        y: isActive ? 0 : direction * 60,
        pointerEvents: isActive ? 'auto' : 'none',
      }}
      transition={{ duration: 0.5, ease: EASE_OUT_EXPO as unknown as number[] }}
    >
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-10">
        {children}
      </div>
    </motion.section>
  );
}

/* ─── Stagger children wrapper ─── */

function StaggerIn({
  active,
  children,
  delay = 0,
  className = '',
}: {
  active: boolean;
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay, ease: EASE_OUT_EXPO as unknown as number[] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Card component ─── */

function Card({
  children,
  className = '',
  highlight = false,
}: {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border ${
        highlight
          ? 'border-brand-500/30 bg-brand-500/5'
          : 'border-mono-border bg-mono-surface/40'
      } p-6 ${className}`}
    >
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN DECK PAGE
   ═══════════════════════════════════════════════════════ */

export default function DeckPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartY = useRef(0);

  /* ─── Navigation helpers ─── */

  const goToSlide = useCallback(
    (target: number) => {
      if (isAnimating) return;
      const clamped = Math.max(0, Math.min(TOTAL_SLIDES - 1, target));
      if (clamped === currentSlide) return;
      setIsAnimating(true);
      setCurrentSlide(clamped);
      setTimeout(() => setIsAnimating(false), ANIMATION_LOCKOUT);
    },
    [currentSlide, isAnimating]
  );

  const next = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);
  const prev = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);

  /* ─── Force dark mode ─── */

  useEffect(() => {
    const html = document.documentElement;
    const wasDark = html.classList.contains('dark');
    const savedTheme = localStorage.getItem('orchestly-theme');
    html.classList.add('dark');

    return () => {
      if (!wasDark && savedTheme === 'light') {
        html.classList.remove('dark');
      }
    };
  }, []);

  /* ─── Keyboard navigation ─── */

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
          e.preventDefault();
          next();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          prev();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(TOTAL_SLIDES - 1);
          break;
        default:
          if (e.key >= '1' && e.key <= '9') {
            e.preventDefault();
            goToSlide(parseInt(e.key) - 1);
          }
          if (e.key === '0') {
            e.preventDefault();
            goToSlide(9);
          }
          break;
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [next, prev, goToSlide]);

  /* ─── Touch / swipe ─── */

  useEffect(() => {
    function handleTouchStart(e: TouchEvent) {
      touchStartY.current = e.touches[0].clientY;
    }
    function handleTouchEnd(e: TouchEvent) {
      const delta = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(delta) > SWIPE_THRESHOLD) {
        if (delta > 0) next();
        else prev();
      }
    }

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [next, prev]);

  /* ─── Wheel navigation ─── */

  useEffect(() => {
    let lastWheel = 0;
    function handleWheel(e: WheelEvent) {
      e.preventDefault();
      const now = Date.now();
      if (now - lastWheel < ANIMATION_LOCKOUT) return;
      lastWheel = now;
      if (e.deltaY > 0) next();
      else if (e.deltaY < 0) prev();
    }
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [next, prev]);

  const active = (i: number) => currentSlide === i;

  return (
    <div className="fixed inset-0 bg-mono-bg text-mono-text overflow-hidden">
      {/* ─── Progress bar ─── */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1">
        <motion.div
          className="h-full bg-gradient-to-r from-brand-500 to-accent-500"
          initial={false}
          animate={{ width: `${((currentSlide + 1) / TOTAL_SLIDES) * 100}%` }}
          transition={{ duration: 0.4, ease: EASE_OUT_EXPO as unknown as number[] }}
        />
      </div>

      {/* ─── Navigation dots ─── */}
      <div className="deck-nav fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden sm:flex flex-col gap-2">
        {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
              i === currentSlide
                ? 'bg-brand-400 scale-125'
                : 'bg-mono-muted/40 hover:bg-mono-muted/70'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ─── Slide counter ─── */}
      <div className="deck-nav fixed bottom-4 left-6 z-50 text-xs text-mono-muted font-mono">
        {currentSlide + 1} / {TOTAL_SLIDES}
      </div>

      {/* ─── Slide container ─── */}
      <div className="relative h-full w-full">

        {/* ═══ SLIDE 1: Title ═══ */}
        <Slide index={0} currentSlide={currentSlide}>
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-950/80 via-mono-bg to-accent-950/40 animate-gradient" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px] rounded-full bg-brand-600/8 blur-[150px]" />
          </div>
          <div className="text-center">
            <StaggerIn active={active(0)} delay={0}>
              <div className="flex justify-center mb-8">
                <div className="flex items-center gap-3">
                  <Layers className="h-12 w-12 text-brand-400" />
                  <span className="text-4xl font-bold">Orchestly</span>
                </div>
              </div>
            </StaggerIn>
            <StaggerIn active={active(0)} delay={0.15}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-gradient from-brand-400 to-accent-400">
                  The Control Plane for AI Agents
                </span>
              </h1>
            </StaggerIn>
            <StaggerIn active={active(0)} delay={0.3}>
              <p className="mt-6 text-lg sm:text-xl text-mono-body max-w-2xl mx-auto">
                Deploy, manage, and scale AI agents without the chaos.
              </p>
            </StaggerIn>
            <StaggerIn active={active(0)} delay={0.45}>
              <div className="mt-10 flex items-center justify-center gap-6 text-sm text-mono-muted">
                <span>Pre-Seed 2026</span>
                <span className="h-1 w-1 rounded-full bg-mono-muted" />
                <span>orchestly.ai</span>
              </div>
            </StaggerIn>
          </div>
        </Slide>

        {/* ═══ SLIDE 2: The Problem ═══ */}
        <Slide index={1} currentSlide={currentSlide}>
          <StaggerIn active={active(1)} delay={0}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12">
              The <span className="text-gradient from-brand-400 to-accent-400">Problem</span>
            </h2>
          </StaggerIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { value: 73, prefix: '', suffix: '%', label: 'Of enterprises use multiple LLM providers', sub: 'Source: Menlo Ventures 2024 survey' },
              { value: 40, prefix: '', suffix: '%+', label: 'Of AI spend lacks visibility', sub: 'Teams can\'t track per-agent costs' },
              { value: 6, prefix: '', suffix: ' mo', label: 'Typical time to production', sub: 'From AI prototype to deployed agent' },
            ].map((stat, i) => (
              <StaggerIn key={stat.label} active={active(1)} delay={0.1 + i * 0.15}>
                <Card>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-400">
                    <AnimatedNumber
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      active={active(1)}
                    />
                  </div>
                  <div className="mt-3 text-sm font-medium text-mono-text">{stat.label}</div>
                  <div className="mt-1 text-xs text-mono-muted">{stat.sub}</div>
                </Card>
              </StaggerIn>
            ))}
          </div>
        </Slide>

        {/* ═══ SLIDE 3: Why Now ═══ */}
        <Slide index={2} currentSlide={currentSlide}>
          <StaggerIn active={active(2)} delay={0}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12">
              Why <span className="text-gradient from-brand-400 to-accent-400">Now</span>
            </h2>
          </StaggerIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Zap, title: 'AI Agent Explosion', desc: 'Every company is deploying AI agents. The number of models and agents per org is growing rapidly quarter over quarter.' },
              { icon: GitBranch, title: 'Multi-Model Reality', desc: 'No single LLM wins every use case. Teams need GPT-4, Claude, Gemini, and open-source models simultaneously.' },
              { icon: DollarSign, title: 'Cost Pressure', desc: 'AI spend is the fastest-growing line item. CFOs demand visibility and optimization - there\'s no tool for this.' },
              { icon: Shield, title: 'Enterprise Readiness', desc: 'Regulated industries need audit logs, RBAC, and compliance. Ad hoc agent deployments won\'t pass security review.' },
            ].map((item, i) => (
              <StaggerIn key={item.title} active={active(2)} delay={0.1 + i * 0.1}>
                <Card className="flex gap-4">
                  <div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10">
                    <item.icon className="h-5 w-5 text-brand-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-mono-body leading-relaxed">{item.desc}</p>
                  </div>
                </Card>
              </StaggerIn>
            ))}
          </div>
        </Slide>

        {/* ═══ SLIDE 4: The Solution ═══ */}
        <Slide index={3} currentSlide={currentSlide}>
          <StaggerIn active={active(3)} delay={0}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4">
              The <span className="text-gradient from-brand-400 to-accent-400">Solution</span>
            </h2>
            <p className="text-center text-mono-body mb-12 max-w-2xl mx-auto">
              Think Kubernetes for AI agents. One platform to orchestrate every agent, model, and workflow.
            </p>
          </StaggerIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: GitBranch, title: 'Multi-AI Routing', desc: 'Route to the optimal model based on cost, latency, and capability. Automatic failover and load balancing.' },
              { icon: Workflow, title: 'Workflow Automation', desc: 'Build complex agent pipelines with a visual DAG builder. Chain agents, add conditions, handle errors.' },
              { icon: BarChart3, title: 'Cost Intelligence', desc: 'Real-time per-agent, per-model spend tracking. Budget alerts and automatic cost optimization.' },
            ].map((item, i) => (
              <StaggerIn key={item.title} active={active(3)} delay={0.1 + i * 0.15}>
                <Card className="text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 mx-auto">
                    <item.icon className="h-6 w-6 text-brand-400" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-mono-body leading-relaxed">{item.desc}</p>
                </Card>
              </StaggerIn>
            ))}
          </div>
        </Slide>

        {/* ═══ SLIDE 5: How It Works ═══ */}
        <Slide index={4} currentSlide={currentSlide}>
          <StaggerIn active={active(4)} delay={0}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12">
              How It <span className="text-gradient from-brand-400 to-accent-400">Works</span>
            </h2>
          </StaggerIn>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
            {[
              {
                number: '01', icon: GitBranch, title: 'Connect',
                desc: 'Add your LLM API keys. Orchestly handles routing, failover, and load balancing across providers.',
                items: [
                  { label: 'OpenAI GPT-4', status: 'Connected', color: 'text-green-400' },
                  { label: 'Anthropic Claude', status: 'Connected', color: 'text-green-400' },
                  { label: 'Google Gemini', status: 'Pending', color: 'text-yellow-400' },
                ],
              },
              {
                number: '02', icon: Store, title: 'Build & Deploy',
                desc: 'Create agents with our workflow builder or install from the marketplace. One-click deployment.',
                items: [
                  { label: 'Support Agent', status: 'Running', color: 'text-green-400' },
                  { label: 'Data Pipeline', status: 'Running', color: 'text-green-400' },
                  { label: 'Code Review Bot', status: 'Staging', color: 'text-brand-400' },
                ],
              },
              {
                number: '03', icon: BarChart3, title: 'Monitor & Optimize',
                desc: 'Track performance, costs, and quality. AI-powered optimization reduces spend automatically.',
                items: [
                  { label: 'Total Spend', status: '-32%', color: 'text-green-400' },
                  { label: 'Avg Latency', status: '1.2s', color: 'text-brand-400' },
                  { label: 'Success Rate', status: '99.7%', color: 'text-green-400' },
                ],
              },
            ].map((step, i) => (
              <StaggerIn key={step.number} active={active(4)} delay={0.1 + i * 0.15}>
                <Card className="relative h-full">
                  {i < 2 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t border-dashed border-mono-border" />
                  )}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/20 text-xs font-bold text-brand-400">
                      {step.number}
                    </span>
                    <div className="inline-flex rounded-lg bg-brand-500/10 p-2">
                      <step.icon className="h-4 w-4 text-brand-400" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mono-body">{step.desc}</p>
                  <div className="mt-4 rounded-lg bg-mono-bg-alt/60 border border-mono-border/50 p-3">
                    <div className="space-y-1.5">
                      {step.items.map((item) => (
                        <div key={item.label} className="flex items-center justify-between text-[11px]">
                          <span className="text-mono-body">{item.label}</span>
                          <span className={`font-medium ${item.color}`}>{item.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </StaggerIn>
            ))}
          </div>
        </Slide>

        {/* ═══ SLIDE 6: Product Dashboard ═══ */}
        <Slide index={5} currentSlide={currentSlide}>
          <StaggerIn active={active(5)} delay={0}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">
              The <span className="text-gradient from-brand-400 to-accent-400">Dashboard</span>
            </h2>
          </StaggerIn>
          <StaggerIn active={active(5)} delay={0.15}>
            <div className="rounded-2xl border border-mono-border bg-mono-bg-alt shadow-2xl overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 border-b border-mono-border bg-mono-bg-alt px-4 py-2.5">
                <div className="h-3 w-3 rounded-full bg-red-500/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <div className="h-3 w-3 rounded-full bg-green-500/60" />
                <div className="ml-3 flex-1 rounded-md bg-mono-surface px-4 py-1 text-xs text-mono-body">
                  app.orchestly.ai/dashboard
                </div>
              </div>
              <div className="flex min-h-[340px] sm:min-h-[380px]">
                {/* Sidebar */}
                <div className="hidden sm:block w-44 border-r border-mono-border/50 bg-mono-bg-alt/40 p-4 space-y-1">
                  {['Dashboard', 'Agents', 'Workflows', 'Models', 'Costs', 'Marketplace', 'Settings'].map((label, idx) => (
                    <div
                      key={label}
                      className={`rounded-md px-3 py-1.5 text-xs ${
                        idx === 0 ? 'bg-brand-500/15 text-brand-400 font-medium' : 'text-mono-body'
                      }`}
                    >
                      {label}
                    </div>
                  ))}
                </div>
                {/* Main content */}
                <div className="flex-1 p-4 sm:p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-mono-text">Agent Control Plane</div>
                      <div className="text-[11px] text-mono-body">Last updated: 30 seconds ago</div>
                    </div>
                    <div className="flex gap-2">
                      <span className="rounded-md bg-brand-500/15 px-3 py-1 text-[10px] font-medium text-brand-400">Deploy Agent</span>
                      <span className="rounded-md bg-accent-500/15 px-3 py-1 text-[10px] font-medium text-accent-400">View Costs</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                      { label: 'Active Agents', value: '47', change: '+8' },
                      { label: 'Requests/hr', value: '12.4K', change: '+18%' },
                      { label: 'Monthly Spend', value: '$8.2K', change: '-32%' },
                      { label: 'Success Rate', value: '99.7%', change: '+0.3%' },
                    ].map((m) => (
                      <div key={m.label} className="rounded-lg bg-mono-surface/40 border border-mono-border/50 p-3">
                        <div className="text-[10px] text-mono-body">{m.label}</div>
                        <div className="mt-1 text-base sm:text-lg font-bold text-mono-text">{m.value}</div>
                        <div className="mt-0.5 text-[10px] font-medium text-green-400">{m.change} this month</div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-lg border border-brand-500/20 bg-brand-500/5 p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="h-2 w-2 rounded-full bg-brand-400 animate-pulse" />
                      <span className="text-xs font-medium text-brand-400">Cost Alert - Support Agent</span>
                      <span className="ml-auto text-[10px] text-mono-body">Just now</span>
                    </div>
                    <div className="text-[11px] text-mono-body leading-relaxed">
                      Routing optimization applied: switched from GPT-4 to Claude 3.5 Sonnet for
                      Tier 1 support queries. Estimated savings: $1,200/mo with equivalent quality.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </StaggerIn>
        </Slide>

        {/* ═══ SLIDE 7: Platform Features ═══ */}
        <Slide index={6} currentSlide={currentSlide}>
          <StaggerIn active={active(6)} delay={0}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4">
              Platform <span className="text-gradient from-brand-400 to-accent-400">Features</span>
            </h2>
            <p className="text-center text-mono-body mb-10 max-w-2xl mx-auto">
              Everything engineering teams need to run AI agents at scale.
            </p>
          </StaggerIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: GitBranch, title: 'Multi-AI Routing', desc: 'Intelligent routing with automatic failover across OpenAI, Anthropic, Google, and more.' },
              { icon: Workflow, title: 'Visual Workflow Builder', desc: 'DAG-based pipeline builder for complex multi-agent workflows with error handling.' },
              { icon: Store, title: 'Agent Marketplace', desc: 'Discover, publish, and reuse agents across your org with version control.' },
              { icon: DollarSign, title: 'Cost Optimization', desc: 'Real-time spend tracking with budget alerts and automatic model optimization.' },
              { icon: Users, title: 'Human-in-the-Loop', desc: 'Configurable approval gates for high-stakes agent decisions.' },
              { icon: Shield, title: 'Enterprise Security', desc: 'SSO, RBAC, BYOK encryption, and audit logs for every agent action.' },
            ].map((item, i) => (
              <StaggerIn key={item.title} active={active(6)} delay={0.1 + i * 0.08}>
                <div className="flex gap-3 rounded-lg border border-mono-border bg-mono-surface/40 p-4">
                  <div className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/10">
                    <item.icon className="h-4 w-4 text-brand-400" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">{item.title}</div>
                    <div className="text-xs text-mono-body mt-1">{item.desc}</div>
                  </div>
                </div>
              </StaggerIn>
            ))}
          </div>
        </Slide>

        {/* ═══ SLIDE 8: Market Opportunity ═══ */}
        <Slide index={7} currentSlide={currentSlide}>
          <StaggerIn active={active(7)} delay={0}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12">
              Market <span className="text-gradient from-brand-400 to-accent-400">Opportunity</span>
            </h2>
          </StaggerIn>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              { label: 'TAM', value: 50, suffix: 'B+', desc: 'AI infrastructure & MLOps market (growing 25%+ YoY)', width: '100%', color: 'from-brand-600/30 to-brand-500/10' },
              { label: 'SAM', value: 8, suffix: 'B', desc: 'AI agent orchestration & management tools', width: '65%', color: 'from-brand-500/40 to-brand-400/15' },
              { label: 'SOM', value: 200, suffix: 'M', desc: 'Mid-market & growth-stage companies - our beachhead', width: '35%', color: 'from-accent-500/40 to-accent-400/15' },
            ].map((tier, i) => (
              <StaggerIn key={tier.label} active={active(7)} delay={0.1 + i * 0.15}>
                <div
                  className="relative overflow-hidden rounded-xl border border-mono-border bg-mono-surface/40"
                  style={{ width: tier.width }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${tier.color}`} />
                  <div className="relative flex items-center gap-4 p-6">
                    <div className="text-xs font-bold text-mono-body bg-mono-surface/60 rounded px-2 py-1">
                      {tier.label}
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-brand-400">
                      $<AnimatedNumber value={tier.value} suffix={tier.suffix} active={active(7)} />
                    </div>
                  </div>
                  <div className="relative mt-2 text-sm text-mono-body px-6 pb-6">{tier.desc}</div>
                </div>
              </StaggerIn>
            ))}
          </div>
        </Slide>

        {/* ═══ SLIDE 9: Business Model ═══ */}
        <Slide index={8} currentSlide={currentSlide}>
          <StaggerIn active={active(8)} delay={0}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12">
              Business <span className="text-gradient from-brand-400 to-accent-400">Model</span>
            </h2>
          </StaggerIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                tier: 'Starter',
                price: '$499',
                unit: '/mo',
                features: ['Up to 10 agents', '3 LLM providers', 'Basic analytics', 'Community support'],
                highlighted: false,
              },
              {
                tier: 'Growth',
                price: '$149',
                unit: '/agent/mo',
                features: ['Unlimited agents', 'All LLM providers', 'Advanced cost optimization', 'Workflow builder', 'Priority support'],
                highlighted: true,
              },
              {
                tier: 'Enterprise',
                price: 'Custom',
                unit: '',
                features: ['Unlimited everything', 'On-premise deployment', 'Custom integrations', 'SLA guarantees', 'Dedicated CSM'],
                highlighted: false,
              },
            ].map((plan, i) => (
              <StaggerIn key={plan.tier} active={active(8)} delay={0.1 + i * 0.15}>
                <Card highlight={plan.highlighted} className="relative h-full">
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-3 py-0.5 text-[10px] font-bold text-white">
                      Recommended
                    </div>
                  )}
                  <div className="text-sm font-medium text-mono-body">{plan.tier}</div>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-bold text-mono-text">{plan.price}</span>
                    {plan.unit && <span className="text-sm text-mono-body">{plan.unit}</span>}
                  </div>
                  <div className="mt-4 space-y-2">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-mono-body">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                        {f}
                      </div>
                    ))}
                  </div>
                </Card>
              </StaggerIn>
            ))}
          </div>
        </Slide>

        {/* ═══ SLIDE 10: ROI ═══ */}
        <Slide index={9} currentSlide={currentSlide}>
          <StaggerIn active={active(9)} delay={0}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4">
              ROI for <span className="text-gradient from-brand-400 to-accent-400">Teams</span>
            </h2>
            <p className="text-center text-mono-body mb-10 max-w-2xl mx-auto">
              Real impact, measured in time saved and costs reduced.
            </p>
          </StaggerIn>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { metric: 'Agent deployment', before: 'Days of DevOps work', after: 'One-click, minutes' },
              { metric: 'LLM cost management', before: 'Monthly surprise invoices', after: 'Real-time tracking, targeting 20-40% savings' },
              { metric: 'Model switching', before: 'Weeks of re-integration', after: 'Config change, zero downtime' },
              { metric: 'Agent monitoring', before: 'Scattered logs, no visibility', after: 'Unified dashboard, instant alerts' },
            ].map((item, i) => (
              <StaggerIn key={item.metric} active={active(9)} delay={0.1 + i * 0.1}>
                <Card className="h-full">
                  <div className="text-sm font-medium text-mono-secondary uppercase tracking-wider">
                    {item.metric}
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <div className="flex-1">
                      <div className="text-xs text-mono-muted mb-1">Before</div>
                      <div className="text-base sm:text-lg font-semibold text-red-400">{item.before}</div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-accent-500 shrink-0" />
                    <div className="flex-1">
                      <div className="text-xs text-mono-muted mb-1">After</div>
                      <div className="text-base sm:text-lg font-semibold text-accent-400">{item.after}</div>
                    </div>
                  </div>
                </Card>
              </StaggerIn>
            ))}
          </div>
          <StaggerIn active={active(9)} delay={0.5}>
            <div className="mt-6 text-center">
              <span className="inline-block rounded-lg bg-accent-500/10 border border-accent-500/20 px-4 py-2 text-sm font-medium text-accent-400">
                Our goal: significantly reduce AI ops overhead and optimize model costs
              </span>
            </div>
          </StaggerIn>
        </Slide>

        {/* ═══ SLIDE 11: Traction ═══ */}
        <Slide index={10} currentSlide={currentSlide}>
          <StaggerIn active={active(10)} delay={0}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10">
              <span className="text-gradient from-brand-400 to-accent-400">Traction</span>
            </h2>
          </StaggerIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
            {[
              { milestone: 'Marketing site live', status: 'Done' },
              { milestone: 'Core routing engine', status: 'In Progress' },
              { milestone: 'Dashboard MVP', status: 'In Progress' },
              { milestone: 'Design partners identified', status: 'Active' },
              { milestone: 'Pilot program launch', status: 'Q2 2026' },
            ].map((item, i) => (
              <StaggerIn key={item.milestone} active={active(10)} delay={0.1 + i * 0.1}>
                <div className="rounded-lg border border-mono-border bg-mono-surface/40 p-3 text-center">
                  <div className={`text-[10px] font-bold mb-1 ${
                    item.status === 'Done' ? 'text-green-400' :
                    item.status === 'Active' ? 'text-accent-400' :
                    item.status === 'In Progress' ? 'text-yellow-400' : 'text-mono-body'
                  }`}>
                    {item.status}
                  </div>
                  <div className="text-xs text-mono-body">{item.milestone}</div>
                </div>
              </StaggerIn>
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: 'Infrastructure overhead',
                desc: 'Engineering teams report spending more time managing AI infrastructure than building products - juggling multiple LLM providers with separate APIs and billing.',
              },
              {
                title: 'No cost visibility',
                desc: 'Most teams have no way to attribute AI spend to specific agents or workflows. Monthly invoices are a surprise with no optimization levers.',
              },
            ].map((item, i) => (
              <StaggerIn key={item.title} active={active(10)} delay={0.4 + i * 0.15}>
                <Card>
                  <div className="text-sm font-medium text-brand-400 uppercase tracking-wider mb-2">Industry Pain Point</div>
                  <h4 className="text-base font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-mono-body">{item.desc}</p>
                </Card>
              </StaggerIn>
            ))}
          </div>
        </Slide>

        {/* ═══ SLIDE 12: Competitive Landscape ═══ */}
        <Slide index={11} currentSlide={currentSlide}>
          <StaggerIn active={active(11)} delay={0}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10">
              Competitive <span className="text-gradient from-brand-400 to-accent-400">Landscape</span>
            </h2>
          </StaggerIn>
          <StaggerIn active={active(11)} delay={0.15}>
            <div className="max-w-2xl mx-auto">
              <div className="relative rounded-xl border border-mono-border bg-mono-surface/20 aspect-square max-h-[400px] mx-auto">
                {/* Axis labels */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-mono-body font-medium">
                  Full Platform
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-mono-body font-medium">
                  Point Solution
                </div>
                <div className="absolute top-1/2 -left-14 -translate-y-1/2 -rotate-90 text-xs text-mono-body font-medium">
                  Developer Tool
                </div>
                <div className="absolute top-1/2 -right-14 -translate-y-1/2 -rotate-90 text-xs text-mono-body font-medium">
                  Enterprise Platform
                </div>

                {/* Grid lines */}
                <div className="absolute top-1/2 left-0 right-0 border-t border-mono-border/50" />
                <div className="absolute left-1/2 top-0 bottom-0 border-l border-mono-border/50" />

                {/* Orchestly - top right */}
                <div className="absolute top-[20%] right-[20%] flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-brand-400 animate-pulse shadow-lg shadow-brand-400/50" />
                  <span className="text-sm font-bold text-brand-400">Orchestly</span>
                </div>

                {/* Competitors */}
                <div className="absolute top-[30%] left-[20%] flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-mono-muted" />
                  <span className="text-[11px] text-mono-muted">LangSmith</span>
                </div>
                <div className="absolute bottom-[30%] left-[25%] flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-mono-muted" />
                  <span className="text-[11px] text-mono-muted">OpenRouter</span>
                </div>
                <div className="absolute top-[25%] left-[40%] flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-mono-muted" />
                  <span className="text-[11px] text-mono-muted">Datadog AI</span>
                </div>
                <div className="absolute bottom-[25%] right-[25%] flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-mono-muted" />
                  <span className="text-[11px] text-mono-muted">Custom scripts</span>
                </div>

                {/* Quadrant labels */}
                <div className="absolute top-3 right-3 text-[10px] text-accent-500/60 font-medium">
                  Enterprise + Full Platform
                </div>
                <div className="absolute top-3 left-3 text-[10px] text-mono-muted font-medium">
                  Dev Tool + Full Platform
                </div>
              </div>
            </div>
          </StaggerIn>
        </Slide>

        {/* ═══ SLIDE 13: Team ═══ */}
        <Slide index={12} currentSlide={currentSlide}>
          <StaggerIn active={active(12)} delay={0}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12">
              The <span className="text-gradient from-brand-400 to-accent-400">Team</span>
            </h2>
          </StaggerIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <StaggerIn active={active(12)} delay={0.1}>
              <Card className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-brand-500/20 flex items-center justify-center mb-4">
                  <User className="h-8 w-8 text-brand-400" />
                </div>
                <h3 className="font-semibold">Founder</h3>
                <div className="text-sm text-mono-body mt-1">CEO & Product</div>
                <div className="mt-3 text-xs text-mono-muted leading-relaxed">
                  Full-stack engineering background. Passionate about developer tools and AI infrastructure.
                </div>
              </Card>
            </StaggerIn>

            <StaggerIn active={active(12)} delay={0.25}>
              <div className="rounded-xl border-2 border-dashed border-brand-500/30 p-6 text-center h-full flex flex-col items-center justify-center">
                <div className="mx-auto h-16 w-16 rounded-full border-2 border-dashed border-brand-500/20 flex items-center justify-center mb-4">
                  <Code2 className="h-8 w-8 text-brand-400/50" />
                </div>
                <h3 className="font-semibold text-brand-400">Open Role</h3>
                <div className="text-sm text-mono-body mt-1">CTO / Technical Co-Founder</div>
                <div className="mt-3 text-xs text-mono-muted leading-relaxed">
                  Distributed systems expert. Experience building developer platforms or infrastructure at scale.
                </div>
              </div>
            </StaggerIn>

            <StaggerIn active={active(12)} delay={0.4}>
              <div className="rounded-xl border-2 border-dashed border-accent-500/30 p-6 text-center h-full flex flex-col items-center justify-center">
                <div className="mx-auto h-16 w-16 rounded-full border-2 border-dashed border-accent-500/20 flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-accent-400/50" />
                </div>
                <h3 className="font-semibold text-accent-400">Open Role</h3>
                <div className="text-sm text-mono-body mt-1">Head of Growth</div>
                <div className="mt-3 text-xs text-mono-muted leading-relaxed">
                  Developer marketing expert with deep understanding of the AI tooling ecosystem.
                </div>
              </div>
            </StaggerIn>
          </div>
        </Slide>

        {/* ═══ SLIDE 14: The Ask ═══ */}
        <Slide index={13} currentSlide={currentSlide}>
          <StaggerIn active={active(13)} delay={0}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12">
              The <span className="text-gradient from-brand-400 to-accent-400">Ask</span>
            </h2>
          </StaggerIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: Handshake,
                title: 'Co-Founders',
                desc: 'Technical (distributed systems/ML) co-founder to build the core platform.',
                accent: 'text-brand-400',
                bg: 'bg-brand-500/10',
                border: 'border-brand-500/20',
              },
              {
                icon: Rocket,
                title: '5-10 Design Partners',
                desc: 'Engineering teams running AI agents who want to shape the product.',
                accent: 'text-accent-400',
                bg: 'bg-accent-500/10',
                border: 'border-accent-500/20',
              },
              {
                icon: DollarSign,
                title: '$1M - $2M Pre-Seed',
                desc: 'To build the core platform, launch pilots, and hire the founding team.',
                accent: 'text-purple-400',
                bg: 'bg-purple-500/10',
                border: 'border-purple-500/20',
              },
            ].map((ask, i) => (
              <StaggerIn key={ask.title} active={active(13)} delay={0.1 + i * 0.15}>
                <div className={`rounded-xl border ${ask.border} bg-mono-surface/20 p-6 text-center h-full`}>
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${ask.bg} mx-auto`}>
                    <ask.icon className={`h-6 w-6 ${ask.accent}`} />
                  </div>
                  <h3 className={`mt-4 text-lg font-semibold ${ask.accent}`}>{ask.title}</h3>
                  <p className="mt-2 text-sm text-mono-body leading-relaxed">{ask.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </Slide>

        {/* ═══ SLIDE 15: Contact ═══ */}
        <Slide index={14} currentSlide={currentSlide}>
          <div className="text-center">
            <StaggerIn active={active(14)} delay={0}>
              <div className="flex justify-center mb-8">
                <div className="flex items-center gap-3">
                  <Layers className="h-12 w-12 text-brand-400" />
                  <span className="text-4xl font-bold">Orchestly</span>
                </div>
              </div>
            </StaggerIn>
            <StaggerIn active={active(14)} delay={0.15}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Thank you.
              </h2>
            </StaggerIn>
            <StaggerIn active={active(14)} delay={0.3}>
              <div className="mt-8 flex flex-col items-center gap-3 text-mono-body">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span>orchestly.ai</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>hello@orchestly.ai</span>
                </div>
              </div>
            </StaggerIn>
            <StaggerIn active={active(14)} delay={0.45}>
              <div className="mt-10">
                <a
                  href="https://orchestly.ai/#cta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-cta px-6 py-3 text-sm font-semibold text-cta-text transition-all hover:bg-cta-hover hover:shadow-lg hover:shadow-cta/25"
                >
                  Request Early Access
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </StaggerIn>
          </div>
        </Slide>

      </div>
    </div>
  );
}
