import PhysicsLayout from '@/components/physics/PhysicsLayout';
import PhysicsNoteCard from '@/components/physics/PhysicsNoteCard';
import { MathBlock, Math } from '@/components/physics/MathBlock';

const Capacitance = () => (
  <PhysicsLayout
    title="Capacitance"
    subtitle="Storing charge — and the exponential laws of charging and discharging."
  >
    <PhysicsNoteCard
      title="Capacitance & Energy Stored"
      syllabusRef="Electricity · 6.1"
      concept={
        <>
          <p>A <strong>capacitor</strong> stores charge <Math>{'Q'}</Math> on its plates when a pd <Math>{'V'}</Math> is applied. Capacitance is defined as <Math>{'C = Q/V'}</Math>, measured in farads (1 F = 1 C V<sup>-1</sup>).</p>
        </>
      }
      derivation={
        <>
          <p>Energy stored = work done in moving charge against the rising pd:</p>
          <MathBlock expr="U = \int_{0}^{Q} V\,dq = \int_{0}^{Q} \frac{q}{C}\,dq" />
          <MathBlock label="Integrate" expr="U = \frac{Q^{2}}{2C} = \tfrac{1}{2} C V^{2} = \tfrac{1}{2} Q V" />
          <MathBlock label="Capacitors in parallel" expr="C_{\text{tot}} = C_1 + C_2 + \dots" />
          <MathBlock label="Capacitors in series" expr="\frac{1}{C_{\text{tot}}} = \frac{1}{C_1} + \frac{1}{C_2} + \dots" />
        </>
      }
      examinerTrap={{
        trap: 'Using U = QV instead of ½QV.',
        correction: 'During charging, V grows linearly from 0 to V_final. The work done is the AREA under the Q–V graph (a triangle), which is ½QV. The other half of the energy supplied by the cell is dissipated in the wires.',
      }}
    />

    <PhysicsNoteCard
      title="Charging & Discharging — Exponential Decay"
      syllabusRef="Electricity · 6.3"
      concept={
        <>
          <p>When a charged capacitor discharges through a resistor, the rate of loss of charge is proportional to the charge remaining. The result is an exponential decay characterised by the time constant <Math>{'\\tau = RC'}</Math>.</p>
        </>
      }
      derivation={
        <>
          <MathBlock label="From Kirchhoff's voltage loop" expr="\frac{Q}{C} + R\,\frac{dQ}{dt} = 0" />
          <MathBlock label="Separate variables" expr="\frac{dQ}{Q} = -\frac{1}{RC}\,dt" />
          <MathBlock label="Integrate" expr="\ln Q = -\frac{t}{RC} + \text{const}" />
          <MathBlock label="Apply Q(0) = Q_0" expr="Q(t) = Q_0\,e^{-t/RC}" />
          <p className="text-sm text-muted-foreground">After one time constant <Math>{'t = RC'}</Math>, charge falls to <Math>{'Q_0/e \\approx 37\\%'}</Math>.</p>
        </>
      }
      examinerTrap={{
        trap: 'Confusing the half-life T₁/₂ with the time constant τ.',
        correction: 'τ = RC is the time to fall to 1/e (≈37%). Half-life is T₁/₂ = τ ln 2 ≈ 0.693 τ. Read carefully which the question is asking for.',
      }}
    />
  </PhysicsLayout>
);

export default Capacitance;
