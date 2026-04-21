import PhysicsLayout from '@/components/physics/PhysicsLayout';
import PhysicsNoteCard from '@/components/physics/PhysicsNoteCard';
import { MathBlock, Math } from '@/components/physics/MathBlock';

const Lenses = () => (
  <PhysicsLayout
    title="Lenses & Optics"
    subtitle="Refraction, the thin-lens equation and image formation."
  >
    <PhysicsNoteCard
      title="Refraction & Snell's Law"
      syllabusRef="Optics · 8.1"
      concept={
        <>
          <p>When light crosses a boundary between two transparent media of different optical densities, it changes speed and (unless normal incidence) direction. The refractive index <Math>{'n = c/v'}</Math> describes how much light slows in the medium.</p>
        </>
      }
      derivation={
        <>
          <MathBlock label="Snell's law" expr="n_1 \sin\theta_1 = n_2 \sin\theta_2" />
          <MathBlock label="Critical angle for total internal reflection (n_2 < n_1)" expr="\sin\theta_c = \frac{n_2}{n_1}" />
        </>
      }
      examinerTrap={{
        trap: 'Forgetting that TIR only occurs going from a denser to a less-dense medium.',
        correction: 'Light must be travelling in the medium with the HIGHER refractive index. Going air → glass cannot give TIR. Always identify n₁ and n₂ before calculating θ_c.',
      }}
    />

    <PhysicsNoteCard
      title="The Thin-Lens Equation"
      syllabusRef="Optics · 8.3"
      concept={
        <>
          <p>For a thin lens of focal length <Math>{'f'}</Math>, an object at distance <Math>{'u'}</Math> forms an image at distance <Math>{'v'}</Math> following the Cartesian (real-positive) convention.</p>
        </>
      }
      derivation={
        <>
          <MathBlock label="Thin-lens equation" expr="\frac{1}{v} - \frac{1}{u} = \frac{1}{f}" />
          <MathBlock label="Linear magnification" expr="m = \frac{h_i}{h_o} = \frac{v}{u}" />
          <MathBlock label="Power of a lens (dioptres)" expr="P = \frac{1}{f}\;[\text{m}^{-1}]" />
        </>
      }
      examinerTrap={{
        trap: 'Mixing sign conventions mid-question (Cartesian vs real-is-positive).',
        correction: 'Pick ONE convention at the start and stick to it. State it: e.g. "distances measured from the lens, real images positive". Examiners deduct marks for inconsistent signs.',
      }}
    />
  </PhysicsLayout>
);

export default Lenses;
