import PhysicsLayout from '@/components/physics/PhysicsLayout';
import PhysicsNoteCard from '@/components/physics/PhysicsNoteCard';
import { MathBlock, Math } from '@/components/physics/MathBlock';

const Radioactivity = () => (
  <PhysicsLayout
    title="Radioactivity"
    subtitle="Random decay, the exponential law, and half-life."
  >
    <PhysicsNoteCard
      title="The Decay Law"
      syllabusRef="Nuclear · 10.1"
      concept={
        <>
          <p>Radioactive decay is <strong>spontaneous</strong> (not caused by external conditions) and <strong>random</strong> (we cannot predict which nucleus will decay next, or when). The rate of decay of a sample is proportional to the number of undecayed nuclei present.</p>
          <p>The <strong>activity</strong> <Math>{'A'}</Math> is the number of decays per second, measured in becquerels (Bq).</p>
        </>
      }
      derivation={
        <>
          <MathBlock label="Defining the decay constant λ" expr="\frac{dN}{dt} = -\lambda N" />
          <MathBlock label="Separate and integrate" expr="\int_{N_0}^{N}\frac{dN}{N} = -\lambda \int_{0}^{t} dt" />
          <MathBlock label="Decay law" expr="N(t) = N_0\,e^{-\lambda t}" />
          <MathBlock label="Activity" expr="A = \lambda N = A_0\,e^{-\lambda t}" />
          <MathBlock label="Half-life" expr="T_{1/2} = \frac{\ln 2}{\lambda}" />
        </>
      }
      examinerTrap={{
        trap: 'Saying "after two half-lives there is none of the original isotope left".',
        correction: 'Half-lives reduce the population by factors of 2: after 1 → 50%, after 2 → 25%, after 3 → 12.5%. It is asymptotic — never reaches zero in finite time.',
      }}
    />

    <PhysicsNoteCard
      title="Alpha, Beta & Gamma Radiation"
      syllabusRef="Nuclear · 10.3"
      concept={
        <>
          <p><strong>α</strong>: helium-4 nucleus (<Math>{'_{2}^{4}\\text{He}'}</Math>). Heavily ionising, stopped by paper, range a few cm in air.</p>
          <p><strong>β⁻</strong>: high-energy electron from neutron → proton + e⁻ + <Math>{'\\bar{\\nu}_e'}</Math>. Stopped by ~3 mm aluminium.</p>
          <p><strong>γ</strong>: high-energy photon. No charge or mass — attenuated, never fully stopped, by lead.</p>
        </>
      }
      derivation={
        <>
          <MathBlock label="α decay (mass and charge balance)" expr="^{A}_{Z}X \;\rightarrow\; ^{A-4}_{Z-2}Y + ^{4}_{2}\alpha" />
          <MathBlock label="β⁻ decay" expr="^{A}_{Z}X \;\rightarrow\; ^{\;A}_{Z+1}Y + ^{0}_{-1}\beta + \bar{\nu}_e" />
          <MathBlock label="γ emission (no nucleon change)" expr="^{A}_{Z}X^{*} \;\rightarrow\; ^{A}_{Z}X + \gamma" />
        </>
      }
      examinerTrap={{
        trap: 'Forgetting the antineutrino in β⁻ decay (or the neutrino in β⁺ decay).',
        correction: 'Always include the antineutrino in β⁻ and the neutrino in β⁺ — without them, lepton number is not conserved. Examiners specifically check this.',
      }}
    />
  </PhysicsLayout>
);

export default Radioactivity;
