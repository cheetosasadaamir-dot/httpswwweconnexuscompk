import PhysicsLayout from '@/components/physics/PhysicsLayout';
import PhysicsNoteCard from '@/components/physics/PhysicsNoteCard';
import { MathBlock, Math } from '@/components/physics/MathBlock';

const Particles = () => (
  <PhysicsLayout
    title="Particle Physics"
    subtitle="The Standard Model — quarks, leptons and the four fundamental interactions."
  >
    <PhysicsNoteCard
      title="The Standard Model"
      syllabusRef="Particles · 11.1"
      concept={
        <>
          <p>All known matter is built from twelve fundamental fermions in three generations: six <strong>quarks</strong> (up, down, charm, strange, top, bottom) and six <strong>leptons</strong> (electron, muon, tau and their three neutrinos). Forces are mediated by <strong>gauge bosons</strong>: photon (EM), W±/Z⁰ (weak), gluon (strong), graviton (gravity, hypothetical).</p>
          <p><strong>Hadrons</strong> are bound states of quarks: <strong>baryons</strong> (3 quarks, e.g. proton = uud) and <strong>mesons</strong> (quark-antiquark pair).</p>
        </>
      }
      derivation={
        <>
          <p>Quark composition charges (in units of e):</p>
          <MathBlock label="Proton (uud)" expr="Q_p = +\tfrac{2}{3} + \tfrac{2}{3} - \tfrac{1}{3} = +1" />
          <MathBlock label="Neutron (udd)" expr="Q_n = +\tfrac{2}{3} - \tfrac{1}{3} - \tfrac{1}{3} = 0" />
          <p>β⁻ decay at the quark level — a down quark transforms via a virtual W⁻ boson:</p>
          <MathBlock expr="d \;\rightarrow\; u + W^{-} \;\rightarrow\; u + e^{-} + \bar{\nu}_e" />
        </>
      }
      examinerTrap={{
        trap: 'Treating leptons as composite particles — saying an electron "is made of smaller things".',
        correction: 'Leptons are FUNDAMENTAL — point-like, no internal structure measured to date (< 10⁻¹⁸ m). Only hadrons are composite. Stating "leptons are not made of quarks" is worth a mark.',
      }}
    />

    <PhysicsNoteCard
      title="Conservation Laws in Particle Interactions"
      syllabusRef="Particles · 11.3"
      concept={
        <>
          <p>Every allowed particle reaction must conserve, simultaneously: charge <Math>{'Q'}</Math>, baryon number <Math>{'B'}</Math>, lepton number <Math>{'L'}</Math> (per family), and energy/momentum. Strangeness is conserved in strong and EM interactions but can change by ±1 in weak interactions.</p>
        </>
      }
      derivation={
        <>
          <p>Worked example — is this reaction allowed? <Math>{'p + p \\rightarrow p + n + \\pi^{+}'}</Math></p>
          <MathBlock label="Charge" expr="(+1)+(+1) \;=\; (+1)+(0)+(+1) \;\checkmark" />
          <MathBlock label="Baryon number" expr="(+1)+(+1) \;=\; (+1)+(+1)+(0) \;\checkmark" />
          <MathBlock label="Lepton number" expr="0+0 \;=\; 0+0+0 \;\checkmark" />
          <p className="text-sm text-muted-foreground">All conservation laws satisfied — reaction is allowed (subject to having enough kinetic energy).</p>
        </>
      }
      examinerTrap={{
        trap: 'Forgetting that lepton number is conserved per family — not just totalled.',
        correction: 'L_e, L_μ, L_τ are each separately conserved. A muon decays to e⁻ + ν̄_e + ν_μ — the muon-neutrino on the right preserves L_μ; the antineutrino-electron preserves L_e.',
      }}
    />
  </PhysicsLayout>
);

export default Particles;
