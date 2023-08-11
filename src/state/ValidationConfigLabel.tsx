import exp = require("constants");

export class LabelCondition {
    section_handle: String;
    section_value: String;
    consequences: MakeHiddenConsequence[] = new Array();
    constructor(_section_handle: String, _section_value: String, _consequences: Array<MakeHiddenConsequence>) {
        this.section_handle = _section_handle;
        this.section_value = _section_value;
        this.consequences = _consequences;
    }
}

export class MakeHiddenConsequence {
    section_handle: String;    
    constructor(_section_handle: String) {
        this.section_handle = _section_handle;
    }    
}

export class ValidateConfigLabel {
    LabelConditions: LabelCondition[] = new Array();
    
    constructor(_LabelConditions: Array<LabelCondition>) {
        this.LabelConditions = _LabelConditions;
    }
}

var validateConfigLabel = new ValidateConfigLabel(
    [
        new LabelCondition('collection_0', 'P', [
            new MakeHiddenConsequence('collection_1_P'),
            new MakeHiddenConsequence('collection_2_P'),
            new MakeHiddenConsequence('control_0_P'),
            new MakeHiddenConsequence('control_1_P'),
            new MakeHiddenConsequence('control_2_P'),
            new MakeHiddenConsequence('security_1_P')
        ]), 
        new LabelCondition('collection_2', 'P', [
            new MakeHiddenConsequence('control_1_P')
        ])
    ]
);

export { validateConfigLabel }