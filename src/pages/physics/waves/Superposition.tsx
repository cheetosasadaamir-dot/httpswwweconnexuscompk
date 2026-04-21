import PhysicsLayout from '@/components/physics/PhysicsLayout';
import PhysicsNoteCard from '@/components/physics/PhysicsNoteCard';
import { MathBlock, Math } from '@/components/physics/MathBlock';
import WaveSuperposition from '@/components/physics/interactive/WaveSuperposition';

const Superposition = () => (
  <PhysicsLayout
    title="Superposition"
    subtitle="When two waves meet, displacements simply add."
  >
    <PhysicsNoteCard
      title="The Principle of Superposition"
      syllabusRef="Waves · 7.1"
      concept={
        <>
          <p>When two or more waves of the same kind overlap at a point, the resultant displacement is the <strong>vector sum</strong> of the individual displacements at that instant.</p>
          <p>For sustained interference patterns the sources must be <strong>coherent</strong>: same frequency and a constant phase relationship.</p>
        </>
      }
      diagram={<WaveSuperposition />}
      derivation={
        <>
          <p>Two waves of equal amplitude <Math>{'A'}</Math>, equal frequency, with a phase difference <Math>{'\\Delta\\varphi'}</Math>:</p>
          <MathBlock expr="y_1 = A\sin(\omega t),\quad y_2 = A\sin(\omega t + \Delta\varphi)" />
          <MathBlock label="Sum-to-product identity" expr="y_1 + y_2 = 2A\cos\!\left(\tfrac{\Delta\varphi}{2}\right)\sin\!\left(\omega t + \tfrac{\Delta\varphi}{2}\right)" />
          <MathBlock label="Resultant amplitude" expr="A_R = 2A\left|\cos\!\left(\tfrac{\Delta\varphi}{2}\right)\right|" />
          <p className="text-sm text-muted-foreground">
            Constructive maximum at <Math>{'\\Delta\\varphi = 0, 2\\pi, 4\\pi,\\dots'}</Math>; destructive null at <Math>{'\\Delta\\varphi = \\pi, 3\\pi,\\dots'}</Math>
          </p>
        </>
      }
      examinerTrap={{
        trap: 'Treating intensities as additive — writing I_total = I_1 + I_2.',
        correction: 'Intensity ∝ amplitude². For coherent sources you must add amplitudes (with phase) and then square. Two coherent equal sources can give 4× the single-source intensity, not 2×.',
      }}
    />
  </PhysicsLayout>
);

export default Superposition;
