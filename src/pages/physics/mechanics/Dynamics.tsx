import PhysicsLayout from '@/components/physics/PhysicsLayout';
import PhysicsNoteCard from '@/components/physics/PhysicsNoteCard';
import { MathBlock, Math } from '@/components/physics/MathBlock';

const Dynamics = () => (
  <PhysicsLayout
    title="Dynamics"
    subtitle="Newton's laws, momentum and the principle of conservation."
  >
    <PhysicsNoteCard
      title="Newton's Laws of Motion"
      syllabusRef="Mechanics · 2.1"
      concept={
        <>
          <p><strong>1st law:</strong> A body remains at rest or in uniform motion in a straight line unless acted on by a resultant external force.</p>
          <p><strong>2nd law:</strong> The resultant force is equal to the rate of change of momentum: <Math>{'F = \\frac{dp}{dt}'}</Math>. For constant mass, <Math>{'F = ma'}</Math>.</p>
          <p><strong>3rd law:</strong> If body A exerts a force on body B, then B exerts an equal and opposite force on A — same type of force, on different bodies.</p>
        </>
      }
      derivation={
        <>
          <p>Starting from the rate-of-change-of-momentum form:</p>
          <MathBlock expr="F = \frac{d(mv)}{dt}" />
          <MathBlock label="If m is constant" expr="F = m\frac{dv}{dt} = ma" />
          <MathBlock label="If v is constant (e.g. a rocket losing mass)" expr="F = v\frac{dm}{dt}" />
        </>
      }
      examinerTrap={{
        trap: 'Treating Newton\'s 3rd-law pairs as the same force, or pairing a weight with a normal contact force.',
        correction: 'Pairs are always (a) the same type of force, (b) act on different bodies, (c) equal magnitude, (d) opposite direction. Weight–Normal are NOT a pair: weight is gravitational (Earth on object), normal is contact (surface on object).',
      }}
    />

    <PhysicsNoteCard
      title="Momentum, Impulse & Conservation"
      syllabusRef="Mechanics · 2.3"
      concept={
        <>
          <p>Linear momentum <Math>{'p = mv'}</Math> is a vector. <strong>Impulse</strong> is the change in momentum: <Math>{'J = F\\,\\Delta t = \\Delta p'}</Math>.</p>
          <p>In the absence of external forces, total momentum of a closed system is <strong>conserved</strong> in every collision — elastic, inelastic, or explosive.</p>
        </>
      }
      derivation={
        <>
          <p>Two bodies (masses <Math>{'m_1, m_2'}</Math>, initial velocities <Math>{'u_1, u_2'}</Math>, final <Math>{'v_1, v_2'}</Math>) collide:</p>
          <MathBlock label="Conservation of momentum" expr="m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2" />
          <MathBlock label="Elastic collision — KE also conserved" expr="\tfrac{1}{2} m_1 u_1^{2} + \tfrac{1}{2} m_2 u_2^{2} = \tfrac{1}{2} m_1 v_1^{2} + \tfrac{1}{2} m_2 v_2^{2}" />
          <MathBlock label="A useful elastic-collision identity" expr="u_1 - u_2 = -(v_1 - v_2)" />
        </>
      }
      examinerTrap={{
        trap: 'Assuming kinetic energy is conserved in every collision — it is not.',
        correction: 'Momentum is conserved in ALL collisions (no external force). KE is conserved ONLY in perfectly elastic collisions. In inelastic collisions, KE converts to heat, sound, deformation.',
        markScheme: 'State "momentum is conserved because there is no external force on the system" for the explanation mark.',
      }}
    />
  </PhysicsLayout>
);

export default Dynamics;
