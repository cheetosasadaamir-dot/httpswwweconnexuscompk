import PhysicsLayout from '@/components/physics/PhysicsLayout';
import PhysicsNoteCard from '@/components/physics/PhysicsNoteCard';
import { MathBlock, Math } from '@/components/physics/MathBlock';

const Deformation = () => (
  <PhysicsLayout
    title="Deformation of Solids"
    subtitle="How materials stretch, store energy, and ultimately fail."
  >
    <PhysicsNoteCard
      title="Hooke's Law & Elastic Energy"
      syllabusRef="Materials · 3.1"
      concept={
        <>
          <p>Within the elastic limit, the extension of a spring is directly proportional to the load: <Math>{'F = k x'}</Math>, where <Math>{'k'}</Math> is the spring constant (N m<sup>-1</sup>).</p>
          <p>The work done in stretching is stored as <strong>elastic potential energy</strong>, recoverable on release.</p>
        </>
      }
      derivation={
        <>
          <p>Work done = area under the F–x graph (a triangle for a Hookean spring):</p>
          <MathBlock expr="W = \int_{0}^{x} F\,dx = \int_{0}^{x} kx\,dx" />
          <MathBlock label="Integrate" expr="W = \tfrac{1}{2} k x^{2}" />
          <MathBlock label="Equivalently, in terms of force" expr="E = \tfrac{1}{2} F x" />
        </>
      }
      examinerTrap={{
        trap: 'Using F·x (not ½ F·x) for the energy stored in a stretched spring.',
        correction: 'Force is NOT constant during stretching — it grows from 0 to F. The mean force is F/2, so work = ½Fx. Drawing the F–x triangle on the diagram earns the method mark.',
      }}
    />

    <PhysicsNoteCard
      title="Stress, Strain & Young Modulus"
      syllabusRef="Materials · 3.2"
      concept={
        <>
          <p><strong>Tensile stress</strong>: <Math>{'\\sigma = F/A'}</Math> (Pa). <strong>Tensile strain</strong>: <Math>{'\\varepsilon = \\Delta L / L_0'}</Math> (dimensionless).</p>
          <p>For a Hookean material, the ratio is constant — the <strong>Young modulus</strong> <Math>{'E'}</Math>, a property of the material (not the sample).</p>
        </>
      }
      derivation={
        <>
          <MathBlock label="Definition" expr="E = \frac{\sigma}{\varepsilon} = \frac{F/A}{\Delta L / L_0} = \frac{F L_0}{A\,\Delta L}" />
          <MathBlock label="Energy stored per unit volume" expr="u = \tfrac{1}{2}\,\sigma\,\varepsilon = \frac{\sigma^{2}}{2E}" />
        </>
      }
      examinerTrap={{
        trap: "Confusing the Young modulus (a material property) with the spring constant (depends on the sample's length and cross-section).",
        correction: 'k changes if you cut a wire in half; E does not. Always quote E in Pa or GPa and check the cross-sectional area is in m².',
        markScheme: 'A unit error on E (e.g. writing N/m instead of Pa) is a classic 1-mark deduction even if the number is correct.',
      }}
    />
  </PhysicsLayout>
);

export default Deformation;
