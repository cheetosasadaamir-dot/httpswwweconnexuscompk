import PhysicsLayout from '@/components/physics/PhysicsLayout';
import PhysicsNoteCard from '@/components/physics/PhysicsNoteCard';
import { MathBlock, Math } from '@/components/physics/MathBlock';

const Interference = () => (
  <PhysicsLayout
    title="Interference & Diffraction"
    subtitle="Young's slits, the diffraction grating, and what 'path difference' really means."
  >
    <PhysicsNoteCard
      title="Young's Double-Slit Experiment"
      syllabusRef="Waves · 7.4"
      concept={
        <>
          <p>Two coherent point sources (slits a small distance apart) produce a pattern of bright and dark fringes on a distant screen. Bright fringes occur where the path difference is a whole number of wavelengths.</p>
        </>
      }
      derivation={
        <>
          <p>Slit separation <Math>{'a'}</Math>, slit-screen distance <Math>{'D'}</Math>, fringe spacing <Math>{'x'}</Math>, wavelength <Math>{'\\lambda'}</Math>.</p>
          <MathBlock label="Path difference for nth bright fringe" expr="\Delta = a\sin\theta = n\lambda" />
          <MathBlock label="Small-angle approximation, sin θ ≈ tan θ = x/D" expr="\frac{a x}{D} = n\lambda" />
          <MathBlock label="Fringe spacing" expr="x = \frac{\lambda D}{a}" />
        </>
      }
      examinerTrap={{
        trap: 'Using sin θ = x/D without justifying the small-angle approximation.',
        correction: 'State explicitly "since fringe spacing ≪ D, sin θ ≈ tan θ = x/D". Examiners reward the derivation step, not just the final formula.',
      }}
    />

    <PhysicsNoteCard
      title="The Diffraction Grating"
      syllabusRef="Waves · 7.5"
      concept={
        <>
          <p>A grating with N slits per unit length produces sharp principal maxima at angles satisfying the grating equation. Sharper than two slits, because all N waves must add in phase.</p>
        </>
      }
      derivation={
        <>
          <MathBlock label="Grating equation" expr="d\sin\theta = n\lambda" />
          <p>where <Math>{'d = 1/N'}</Math> is the slit spacing and <Math>{'n = 0, \\pm 1, \\pm 2, \\dots'}</Math> is the order.</p>
          <MathBlock label="Maximum observable order" expr="n_{\max} = \left\lfloor \frac{d}{\lambda} \right\rfloor" />
        </>
      }
      examinerTrap={{
        trap: "Quoting d as 'lines per mm' instead of converting to metres per line.",
        correction: 'If a grating has 600 lines/mm, then d = 1/600 mm = 1.67 × 10⁻⁶ m. Always convert. Wavelength must also be in metres before substituting.',
      }}
    />
  </PhysicsLayout>
);

export default Interference;
