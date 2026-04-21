import PhysicsLayout from '@/components/physics/PhysicsLayout';
import PhysicsNoteCard from '@/components/physics/PhysicsNoteCard';
import { MathBlock, Math } from '@/components/physics/MathBlock';
import ProjectileMotion from '@/components/physics/interactive/ProjectileMotion';

const Kinematics = () => (
  <PhysicsLayout
    title="Kinematics"
    subtitle="The mathematics of motion — without yet asking why things move."
  >
    <PhysicsNoteCard
      title="Displacement, Velocity & Acceleration"
      syllabusRef="Mechanics · 1.1"
      concept={
        <>
          <p>
            <strong>Displacement</strong> (<Math>{'s'}</Math>) is the vector from a defined origin to the position of a body — direction matters. <strong>Velocity</strong> (<Math>{'v'}</Math>) is the rate of change of displacement; <strong>acceleration</strong> (<Math>{'a'}</Math>) is the rate of change of velocity.
          </p>
          <p className="text-muted-foreground text-sm">
            Distance and speed are the corresponding scalar quantities — they discard direction and never decrease. A body can have zero displacement after a complete lap, but never zero distance travelled.
          </p>
        </>
      }
      derivation={
        <>
          <p>For motion under <em>constant</em> acceleration, define <Math>{'u'}</Math> = initial velocity, <Math>{'v'}</Math> = final velocity, <Math>{'t'}</Math> = time, <Math>{'s'}</Math> = displacement.</p>
          <MathBlock label="From the definition of acceleration" expr="a = \frac{v - u}{t} \;\Rightarrow\; v = u + at" />
          <MathBlock label="Mean velocity × time" expr="s = \left(\frac{u+v}{2}\right) t" />
          <MathBlock label="Substitute v = u + at" expr="s = ut + \tfrac{1}{2} a t^{2}" />
          <MathBlock label="Eliminate t" expr="v^{2} = u^{2} + 2as" />
          <p className="text-sm text-muted-foreground">These are the four <strong>SUVAT</strong> equations — only valid when <Math>{'a'}</Math> is constant.</p>
        </>
      }
      examinerTrap={{
        trap: 'Students apply SUVAT to motion where acceleration changes (e.g. air resistance present, or a graph that is curved on a v–t diagram).',
        correction: 'First check the v–t graph is a straight line, or the question explicitly states constant a / "neglect air resistance". If a varies, integrate or use the area under the v–t graph.',
        markScheme: 'Selecting the correct SUVAT equation typically scores 1 mark; substitution another 1; correct unit final answer scores the last mark. Always quote units.',
      }}
    />

    <PhysicsNoteCard
      title="Projectile Motion"
      syllabusRef="Mechanics · 1.3"
      concept={
        <>
          <p>
            A projectile is a body in flight subject only to gravity (air resistance neglected). Its horizontal and vertical motions are <strong>independent</strong>: horizontal velocity is constant, vertical motion has constant acceleration <Math>{'g \\approx 9.81\\,\\text{m/s}^2'}</Math> downwards.
          </p>
        </>
      }
      diagram={<ProjectileMotion />}
      derivation={
        <>
          <p>Launch with speed <Math>{'u'}</Math> at angle <Math>{'\\theta'}</Math>:</p>
          <MathBlock expr="u_x = u\cos\theta, \quad u_y = u\sin\theta" />
          <MathBlock label="Time of flight (lands at same height)" expr="T = \frac{2u\sin\theta}{g}" />
          <MathBlock label="Horizontal range" expr="R = u_x \cdot T = \frac{u^{2}\sin 2\theta}{g}" />
          <MathBlock label="Maximum height" expr="H = \frac{u^{2}\sin^{2}\theta}{2g}" />
          <p className="text-sm text-muted-foreground">Maximum range occurs at <Math>{'\\theta = 45°'}</Math> on level ground.</p>
        </>
      }
      examinerTrap={{
        trap: 'Forgetting that vertical velocity at the apex is zero — but horizontal velocity is NOT zero.',
        correction: 'At the apex, only the y-component of velocity is zero. The projectile still moves horizontally at u cos θ. Decompose all vectors into x and y at every step.',
        markScheme: 'Examiners reward an explicit statement "v_y = 0 at the apex" — write it out for the method mark.',
      }}
    />
  </PhysicsLayout>
);

export default Kinematics;
