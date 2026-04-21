import PhysicsLayout from '@/components/physics/PhysicsLayout';
import PhysicsNoteCard from '@/components/physics/PhysicsNoteCard';
import { MathBlock, Math } from '@/components/physics/MathBlock';

const Photons = () => (
  <PhysicsLayout
    title="Photons & The Photoelectric Effect"
    subtitle="The experimental death of the wave-only picture of light."
  >
    <PhysicsNoteCard
      title="Quantisation of Light — Photons"
      syllabusRef="Quantum · 9.1"
      concept={
        <>
          <p>Electromagnetic radiation is emitted and absorbed in discrete packets called <strong>photons</strong>, each carrying energy <Math>{'E = hf'}</Math>. The intensity of a beam is set by the NUMBER of photons per second, while the energy per photon is set by the frequency.</p>
        </>
      }
      derivation={
        <>
          <MathBlock label="Photon energy" expr="E = hf = \frac{hc}{\lambda}" />
          <MathBlock label="Photon momentum (de Broglie)" expr="p = \frac{h}{\lambda} = \frac{E}{c}" />
        </>
      }
      examinerTrap={{
        trap: 'Saying "more intense light means more energetic photons".',
        correction: 'Intensity = (photons per second) × (energy per photon). A bright red beam can be lower-energy-per-photon than a dim UV beam. Energy per photon depends ONLY on frequency.',
      }}
    />

    <PhysicsNoteCard
      title="The Photoelectric Effect"
      syllabusRef="Quantum · 9.2"
      concept={
        <>
          <p>When light above a threshold frequency <Math>{'f_0'}</Math> shines on a metal surface, electrons are ejected immediately. Below <Math>{'f_0'}</Math>, no electrons are released no matter how intense the light. This rules out the classical wave model and supports the photon model.</p>
          <p>The <strong>work function</strong> <Math>{'\\phi'}</Math> is the minimum energy needed to remove an electron from the surface.</p>
        </>
      }
      derivation={
        <>
          <p>Energy conservation for a single photon-electron interaction:</p>
          <MathBlock label="Einstein's photoelectric equation" expr="hf = \phi + KE_{\max}" />
          <MathBlock label="Threshold frequency" expr="f_0 = \frac{\phi}{h}" />
          <MathBlock label="Stopping potential V_s" expr="eV_s = KE_{\max} = hf - \phi" />
        </>
      }
      examinerTrap={{
        trap: 'Claiming that increasing intensity below the threshold will eventually liberate electrons "if you wait long enough".',
        correction: 'Each photoemission is a one-photon-one-electron event. If hf < φ, NO electron is ever emitted, regardless of intensity or exposure time. This is the cornerstone evidence for the quantum nature of light.',
        markScheme: 'Examiners specifically award marks for the phrase "one-to-one interaction between a photon and an electron".',
      }}
    />
  </PhysicsLayout>
);

export default Photons;
