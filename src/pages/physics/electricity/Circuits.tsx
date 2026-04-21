import PhysicsLayout from '@/components/physics/PhysicsLayout';
import PhysicsNoteCard from '@/components/physics/PhysicsNoteCard';
import { MathBlock, Math } from '@/components/physics/MathBlock';
import CircuitLogic from '@/components/physics/interactive/CircuitLogic';

const Circuits = () => (
  <PhysicsLayout
    title="Electric Circuits"
    subtitle="Charge, current, EMF and Kirchhoff's two unbreakable rules."
  >
    <PhysicsNoteCard
      title="Ohm's Law & Resistance"
      syllabusRef="Electricity · 4.1"
      concept={
        <>
          <p>For a metallic conductor at constant temperature, the current through it is directly proportional to the potential difference across it. Such a conductor is <strong>ohmic</strong>.</p>
          <p>Resistance is defined as <Math>{'R = V/I'}</Math> regardless of whether the component is ohmic.</p>
        </>
      }
      diagram={<CircuitLogic />}
      derivation={
        <>
          <MathBlock label="Definition of current" expr="I = \frac{dQ}{dt}" />
          <MathBlock label="Drift velocity model" expr="I = nAvq" />
          <p className="text-sm text-muted-foreground">where n = charge-carrier density, A = cross-section, v = drift velocity, q = charge per carrier.</p>
          <MathBlock label="Resistivity" expr="R = \frac{\rho L}{A}" />
        </>
      }
      examinerTrap={{
        trap: 'Stating "Ohm\'s law: V = IR" — that is the definition of resistance, not Ohm\'s law.',
        correction: 'Ohm\'s law specifies the CONDITION (constant T, ohmic conductor) under which V ∝ I. Examiners want both the equation AND the condition for the full mark.',
      }}
    />

    <PhysicsNoteCard
      title="Kirchhoff's Laws & Internal Resistance"
      syllabusRef="Electricity · 4.3"
      concept={
        <>
          <p><strong>1st law (junction):</strong> The algebraic sum of currents at a junction is zero — conservation of charge.</p>
          <p><strong>2nd law (loop):</strong> Around any closed loop, the sum of EMFs equals the sum of pd's across components — conservation of energy.</p>
          <p>Real cells have <strong>internal resistance</strong> <Math>{'r'}</Math>, so terminal pd <Math>{'V'}</Math> is less than EMF <Math>{'\\varepsilon'}</Math> when current flows.</p>
        </>
      }
      derivation={
        <>
          <MathBlock label="Loop equation for cell + external R" expr="\varepsilon = IR + Ir" />
          <MathBlock label="Terminal pd" expr="V = \varepsilon - Ir" />
          <MathBlock label="Power delivered to the load" expr="P_R = I^{2}R = \frac{\varepsilon^{2} R}{(R+r)^{2}}" />
          <p className="text-sm text-muted-foreground">Maximum power transfer occurs when R = r (matched-load theorem).</p>
        </>
      }
      examinerTrap={{
        trap: 'Forgetting internal resistance when computing power "delivered by the cell" vs "dissipated in the external circuit".',
        correction: 'Total power = εI. Power in load = I²R. Power lost in cell = I²r. State which power you are computing — examiners check the wording.',
      }}
    />
  </PhysicsLayout>
);

export default Circuits;
