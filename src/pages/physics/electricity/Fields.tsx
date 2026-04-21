import PhysicsLayout from '@/components/physics/PhysicsLayout';
import PhysicsNoteCard from '@/components/physics/PhysicsNoteCard';
import { MathBlock, Math } from '@/components/physics/MathBlock';

const Fields = () => (
  <PhysicsLayout
    title="Electric & Magnetic Fields"
    subtitle="Force at a distance, and how charges move through fields."
  >
    <PhysicsNoteCard
      title="Coulomb's Law & Electric Field Strength"
      syllabusRef="Fields · 5.1"
      concept={
        <>
          <p>The force between two point charges is directly proportional to the product of the charges and inversely proportional to the square of their separation.</p>
          <p>Electric field strength <Math>{'E'}</Math> at a point is the force per unit positive charge experienced by a small test charge placed there.</p>
        </>
      }
      derivation={
        <>
          <MathBlock label="Coulomb's law" expr="F = \frac{1}{4\pi\varepsilon_0}\,\frac{Q_1 Q_2}{r^{2}}" />
          <MathBlock label="Field of a point charge" expr="E = \frac{F}{q} = \frac{1}{4\pi\varepsilon_0}\,\frac{Q}{r^{2}}" />
          <MathBlock label="Uniform field between parallel plates" expr="E = \frac{V}{d}" />
        </>
      }
      examinerTrap={{
        trap: 'Mixing up the radial 1/r² field and the uniform V/d field on the same diagram.',
        correction: 'Point charges → radial field lines, inverse-square. Parallel plates → straight, equally spaced field lines, uniform E = V/d. Look at the diagram before picking the formula.',
      }}
    />

    <PhysicsNoteCard
      title="Magnetic Force on Moving Charges"
      syllabusRef="Fields · 5.4"
      concept={
        <>
          <p>A charged particle moving with velocity <Math>{'v'}</Math> through a magnetic field <Math>{'B'}</Math> experiences a force perpendicular to both. This force does no work — it only changes direction, producing circular motion.</p>
        </>
      }
      derivation={
        <>
          <MathBlock label="Lorentz force (magnitude)" expr="F = Bqv\sin\theta" />
          <MathBlock label="Centripetal condition for circular motion" expr="Bqv = \frac{m v^{2}}{r}" />
          <MathBlock label="Solve for radius — the basis of mass spectrometry" expr="r = \frac{mv}{Bq}" />
        </>
      }
      examinerTrap={{
        trap: 'Applying F = BIL (force on a current-carrying wire) when the question is about a single moving charge.',
        correction: 'Single charge: F = Bqv. Wire of length L carrying current I: F = BIL. They are dimensionally consistent (I·L = nqvA·L = q·v summed over charges) but examiners give the mark for the right starting equation.',
      }}
    />
  </PhysicsLayout>
);

export default Fields;
