import * as InputHelpers from '../../core/components/input_helpers';
import { Player } from '../../core/player';
import { Spec, UnitReference, UnitReference_Type as UnitType } from '../../core/proto/common';
import { EventID, TypedEvent } from '../../core/typed_event';

// Configuration for spec-specific UI elements on the settings tab.
// These don't need to be in a separate file but it keeps things cleaner.

// export const SelfUnholyFrenzy = InputHelpers.makeSpecOptionsBooleanInput<Spec.SpecUnholyDeathKnight>({
// 	fieldName: 'unholyFrenzyTarget',
// 	label: 'Self Unholy Frenzy',
// 	labelTooltip: 'Cast Unholy Frenzy on yourself.',
// 	extraCssClasses: ['within-raid-sim-hide'],
// 	getValue: (player: Player<Spec.SpecUnholyDeathKnight>) => player.getSpecOptions().unholyFrenzyTarget?.type == UnitType.Player,
// 	setValue: (eventID: EventID, player: Player<Spec.SpecUnholyDeathKnight>, newValue: boolean) => {
// 		const newOptions = player.getSpecOptions();
// 		newOptions.unholyFrenzyTarget = UnitReference.create({
// 			type: newValue ? UnitType.Player : UnitType.Unknown,
// 			index: 0,
// 		});
// 		player.setSpecOptions(eventID, newOptions);
// 	},
// 	showWhen: (player: Player<Spec.SpecUnholyDeathKnight>) => player.getTalents().hysteria,
// 	changeEmitter: (player: Player<Spec.SpecUnholyDeathKnight>) => TypedEvent.onAny([player.rotationChangeEmitter, player.talentsChangeEmitter]),
// });

// export const StartingRunicPower = InputHelpers.makeSpecOptionsNumberInput<Spec.SpecUnholyDeathKnight>({
// 	fieldName: 'startingRunicPower',
// 	label: 'Starting Runic Power',
// 	labelTooltip: 'Initial RP at the start of each iteration.',
// });

// export const PetUptime = InputHelpers.makeSpecOptionsNumberInput<Spec.SpecDeathknight>({
// 	fieldName: 'petUptime',
// 	label: 'Ghoul Uptime (%)',
// 	labelTooltip: 'Percent of the fight duration for which your ghoul will be on target.',
// 	percent: true,
// 	showWhen: (player: Player<Spec.SpecDeathknight>) => player.getTalents().masterOfGhouls,
// });

// export const UseAMSInput = InputHelpers.makeSpecOptionsBooleanInput<Spec.SpecUnholyDeathKnight>({
// 	fieldName: 'useAms',
// 	label: 'Use AMS',
// 	labelTooltip: 'Use AMS around predicted damage for a RP gain.',
// 	showWhen: (player: Player<Spec.SpecUnholyDeathKnight>) => player.getTalents().howlingBlast,
// 	changeEmitter: (player: Player<Spec.SpecUnholyDeathKnight>) => TypedEvent.onAny([player.specOptionsChangeEmitter, player.talentsChangeEmitter]),
// });

// export const AvgAMSSuccessRateInput = InputHelpers.makeSpecOptionsNumberInput<Spec.SpecUnholyDeathKnight>({
// 	fieldName: 'avgAmsSuccessRate',
// 	label: 'Avg AMS Success %',
// 	labelTooltip: 'Chance for damage to be taken during the 5 second window of AMS.',
// 	showWhen: (player: Player<Spec.SpecUnholyDeathKnight>) => player.getSpecOptions().useAms == true && player.getTalents().howlingBlast,
// 	changeEmitter: (player: Player<Spec.SpecUnholyDeathKnight>) => TypedEvent.onAny([player.specOptionsChangeEmitter, player.talentsChangeEmitter]),
// });

// export const AvgAMSHitInput = InputHelpers.makeSpecOptionsNumberInput<Spec.SpecUnholyDeathKnight>({
// 	fieldName: 'avgAmsHit',
// 	label: 'Avg AMS Hit',
// 	labelTooltip: 'How much on average (+-10%) the character is hit for when AMS is successful.',
// 	showWhen: (player: Player<Spec.SpecUnholyDeathKnight>) => player.getSpecOptions().useAms == true && player.getTalents().howlingBlast,
// 	changeEmitter: (player: Player<Spec.SpecUnholyDeathKnight>) => TypedEvent.onAny([player.specOptionsChangeEmitter, player.talentsChangeEmitter]),
// });
