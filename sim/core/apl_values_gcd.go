package core

import (
	"time"

	"github.com/wowsims/mop/sim/core/proto"
)

type APLValueGCDIsReady struct {
	DefaultAPLValueImpl
	unit *Unit
}

func (rot *APLRotation) newValueGCDIsReady(config *proto.APLValueGCDIsReady, _ *proto.UUID) APLValue {
	return &APLValueGCDIsReady{
		unit: rot.unit,
	}
}
func (value *APLValueGCDIsReady) Type() proto.APLValueType {
	return proto.APLValueType_ValueTypeBool
}
func (value *APLValueGCDIsReady) GetBool(sim *Simulation) bool {
	return value.unit.GCD.IsReady(sim) || (value.unit.GCD.TimeToReady(sim) <= MaxSpellQueueWindow)
}
func (value *APLValueGCDIsReady) String() string {
	return "GCD Is Ready"
}

type APLValueGCDTimeToReady struct {
	DefaultAPLValueImpl
	unit *Unit
}

func (rot *APLRotation) newValueGCDTimeToReady(config *proto.APLValueGCDTimeToReady, _ *proto.UUID) APLValue {
	return &APLValueGCDTimeToReady{
		unit: rot.unit,
	}
}
func (value *APLValueGCDTimeToReady) Type() proto.APLValueType {
	return proto.APLValueType_ValueTypeDuration
}
func (value *APLValueGCDTimeToReady) GetDuration(sim *Simulation) time.Duration {
	return value.unit.GCD.TimeToReady(sim)
}
func (value *APLValueGCDTimeToReady) String() string {
	return "GCD Time To Ready"
}
