define(
    [
        "app/model/weapons/PlasmaticPulsarDevice"
    ],
    function(PlasmaticPulsarDevice) {
        return {
            run: function() {
                module('Plasmatic Pulsar Device Tests');
                var ppd = new PlasmaticPulsarDevice();

                test("Testing PPD minimum Range", function() {
                    var dieRollsMock = {
                            rolls: [1, 1],
                            total: 2
                        };
                    var results;

                    results = ppd.fire({
                        dieRolls: dieRollsMock,
                        range: 0,
                        targetShield: 'A'
                    });

                    equal(results.length, 0, "Range 0 isn't higher than min range.");
                    
                    results = ppd.fire({
                        dieRolls: dieRollsMock,
                        range: 3,
                        targetShield: 'A'
                    });

                    equal(results.length, 0, "Range 3 isn't higher than min range.");
                });

                test("Testing PPD at range 4, roll 2", function() {
                    var dieRollsMock = {
                            rolls: [1, 1],
                            total: 2
                        };
                    var results;

                    results = ppd.fire({
                        dieRolls: dieRollsMock,
                        range: 4,
                        targetShield: 'A'    
                    });

                    equal(results.length, 3, "three shield facings were hit");
                    var hit = {};
                    for(var i = 0; i < results.length; i++) {
                        ok(typeof results[i].shield != 'undefined', "shield defined for shield " + results[i].shield);
                        ok(typeof hit[results[i].shield] == 'undefined', "shield " + results[i].shield + " wasn't hit multiple times");
                        if(results[i].shield == 'A') {
                            equal(results[i].damage, 16, "Damage to target shield correct");
                        } else if (results[i].shield == 'B') {
                            equal(results[i].damage, 4, "Damage to left shield correct");
                        } else if (results[i].shield == 'F') {
                            equal(results[i].damage, 4, "Damage to right shield correct");
                        } else {
                            ok(false, "Wrong shield hit")
                        }      
                        hit[results[i].shield] = true;
                    } 
                });

                test("Testing PPD at range 25, roll 2", function() {
                    var dieRollsMock = {
                            rolls: [1, 1],
                            total: 2
                        };
                    var results;

                    results = ppd.fire({
                        dieRolls: dieRollsMock,
                        range: 25,
                        targetShield: 'A'    
                    });

                    equal(results.length, 3, "three shield facings were hit");
                    var hit = {};
                    for(var i = 0; i < results.length; i++) {
                        ok(typeof results[i].shield != 'undefined', "shield defined for shield " + results[i].shield);
                        ok(typeof hit[results[i].shield] == 'undefined', "shield " + results[i].shield + " wasn't hit multiple times");
                        if(results[i].shield == 'A') {
                            equal(results[i].damage, 4, "Damage to target shield correct");
                        } else if (results[i].shield == 'B') {
                            equal(results[i].damage, 4, "Damage to left shield correct");
                        } else if (results[i].shield == 'F') {
                            equal(results[i].damage, 4, "Damage to right shield correct");
                        } else {
                            ok(false, "Wrong shield hit")
                        }      
                        hit[results[i].shield] = true;
                    } 
                });

                test("Testing PPD at range 25, roll 12", function() {
                    var dieRollsMock = {
                            rolls: [6, 6],
                            total: 12
                        };
                    var results;

                    results = ppd.fire({
                        dieRolls: dieRollsMock,
                        range: 25,
                        targetShield: 'A'    
                    });

                    equal(results.length, 0, "no shield facings were hit");
                });

                test("Testing PPD at range 4, roll 9", function() {
                    var dieRollsMock = {
                            rolls: [4, 5],
                            total: 9
                        };
                    var results;

                    results = ppd.fire({
                        dieRolls: dieRollsMock,
                        range: 4,
                        targetShield: 'A'    
                    });

                    equal(results.length, 3, "three shield facings were hit");
                    var hit = {};
                    for(var i = 0; i < results.length; i++) {
                        ok(typeof results[i].shield != 'undefined', "shield defined for shield " + results[i].shield);
                        ok(typeof hit[results[i].shield] == 'undefined', "shield " + results[i].shield + " wasn't hit multiple times");
                        if(results[i].shield == 'A') {
                            equal(results[i].damage, 16, "Damage to target shield correct");
                        } else if (results[i].shield == 'B') {
                            equal(results[i].damage, 4, "Damage to left shield correct");
                        } else if (results[i].shield == 'F') {
                            equal(results[i].damage, 4, "Damage to right shield correct");
                        } else {
                            ok(false, "Wrong shield hit")
                        }      
                        hit[results[i].shield] = true;
                    }                    
                }); 

                test("Testing PPD at range 4, roll 11", function() {
                    var dieRollsMock = {
                            rolls: [6, 5],
                            total: 11
                        };
                    var results;

                    results = ppd.fire({
                        dieRolls: dieRollsMock,
                        range: 4,
                        targetShield: 'A'    
                    });

                    equal(results.length, 3, "three shield facings were hit");
                    var hit = {};
                    for(var i = 0; i < results.length; i++) {
                        ok(typeof results[i].shield != 'undefined', "shield defined for shield " + results[i].shield);
                        ok(typeof hit[results[i].shield] == 'undefined', "shield " + results[i].shield + " wasn't hit multiple times");
                        if(results[i].shield == 'A') {
                            equal(results[i].damage, 8, "Damage to target shield correct");
                        } else if (results[i].shield == 'B') {
                            equal(results[i].damage, 2, "Damage to left shield correct");
                        } else if (results[i].shield == 'F') {
                            equal(results[i].damage, 2, "Damage to right shield correct");
                        } else {
                            ok(false, "Wrong shield hit")
                        }      
                        hit[results[i].shield] = true;
                    }                    
                });

                test("Testing PPD at range 4, roll 12", function() {
                    var dieRollsMock = {
                            rolls: [6, 6],
                            total: 12
                        };
                    var results;

                    results = ppd.fire({
                        dieRolls: dieRollsMock,
                        range: 4,
                        targetShield: 'A'    
                    });

                    equal(results.length, 3, "three shield facings were hit");
                    var hit = {};
                    for(var i = 0; i < results.length; i++) {
                        ok(typeof results[i].shield != 'undefined', "shield defined for shield " + results[i].shield);
                        ok(typeof hit[results[i].shield] == 'undefined', "shield " + results[i].shield + " wasn't hit multiple times");
                        if(results[i].shield == 'A') {
                            equal(results[i].damage, 4, "Damage to target shield correct");
                        } else if (results[i].shield == 'B') {
                            equal(results[i].damage, 1, "Damage to left shield correct");
                        } else if (results[i].shield == 'F') {
                            equal(results[i].damage, 1, "Damage to right shield correct");
                        } else {
                            ok(false, "Wrong shield hit")
                        }      
                        hit[results[i].shield] = true;
                    }                    
                });

                test("Testing PPD at range 4, roll 11 + 1", function() {
                    var dieRollsMock = {
                            rolls: [6, 5],
                            total: 11
                        };
                    var results;

                    results = ppd.fire({
                        dieRolls: dieRollsMock,
                        range: 4,
                        targetShield: 'A',
                        modifier: 1    
                    });

                    equal(results.length, 3, "three shield facings were hit");
                    var hit = {};
                    for(var i = 0; i < results.length; i++) {
                        ok(typeof results[i].shield != 'undefined', "shield defined for shield " + results[i].shield);
                        ok(typeof hit[results[i].shield] == 'undefined', "shield " + results[i].shield + " wasn't hit multiple times");
                        if(results[i].shield == 'A') {
                            equal(results[i].damage, 4, "Damage to target shield correct");
                        } else if (results[i].shield == 'B') {
                            equal(results[i].damage, 1, "Damage to left shield correct");
                        } else if (results[i].shield == 'F') {
                            equal(results[i].damage, 1, "Damage to right shield correct");
                        } else {
                            ok(false, "Wrong shield hit")
                        }      
                        hit[results[i].shield] = true;
                    }                    
                });

                test("Testing PPD at range 4, roll 11 + 3", function() {
                    var dieRollsMock = {
                            rolls: [6, 5],
                            total: 11
                        };
                    var results;

                    results = ppd.fire({
                        dieRolls: dieRollsMock,
                        range: 4,
                        targetShield: 'A',
                        modifier: 3    
                    });

                    equal(results.length, 0, "no shield facings were hit");                    
                });

                test("Testing PPD at range 4, roll 6 + 5", function() {
                    var dieRollsMock = {
                            rolls: [4, 5],
                            total: 9
                        };
                    var results;

                    results = ppd.fire({
                        dieRolls: dieRollsMock,
                        range: 4,
                        targetShield: 'A'    
                    });

                    equal(results.length, 3, "three shield facings were hit");
                    var hit = {};
                    for(var i = 0; i < results.length; i++) {
                        ok(typeof results[i].shield != 'undefined', "shield defined for shield " + results[i].shield);
                        ok(typeof hit[results[i].shield] == 'undefined', "shield " + results[i].shield + " wasn't hit multiple times");
                        if(results[i].shield == 'A') {
                            equal(results[i].damage, 16, "Damage to target shield correct");
                        } else if (results[i].shield == 'B') {
                            equal(results[i].damage, 4, "Damage to left shield correct");
                        } else if (results[i].shield == 'F') {
                            equal(results[i].damage, 4, "Damage to right shield correct");
                        } else {
                            ok(false, "Wrong shield hit")
                        }      
                        hit[results[i].shield] = true;
                    }                    
                }); 

                test("Testing PPD at range 11, roll 2 on corner AB targetting A", function() {
                    var dieRollsMock = {
                            rolls: [1, 1],
                            total: 2
                        };
                    var results;

                    results = ppd.fire({
                        dieRolls: dieRollsMock,
                        range: 11,
                        targetShield: 'A',
                        secondTarget: 'B'    
                    });

                    equal(results.length, 2, "two shield facings were hit");
                    var hit = {};
                    for(var i = 0; i < results.length; i++) {
                        ok(typeof results[i].shield != 'undefined', "shield defined for shield " + results[i].shield);
                        ok(typeof hit[results[i].shield] == 'undefined', "shield " + results[i].shield + " wasn't hit multiple times");
                        if(results[i].shield == 'A') {
                            equal(results[i].damage, 12, "Damage to target shield correct");
                        } else if (results[i].shield == 'B') {
                            equal(results[i].damage, 8, "Damage to left shield correct");
                        } else {
                            ok(false, "Wrong shield hit")
                        }      
                        hit[results[i].shield] = true;
                    } 
                });

                test("Testing PPD at range 11, roll 2 on corner AB targetting B", function() {
                    var dieRollsMock = {
                            rolls: [1, 1],
                            total: 2
                        };
                    var results;

                    results = ppd.fire({
                        dieRolls: dieRollsMock,
                        range: 11,
                        targetShield: 'B',
                        secondTarget: 'A'    
                    });

                    equal(results.length, 2, "two shield facings were hit");
                    var hit = {};
                    for(var i = 0; i < results.length; i++) {
                        ok(typeof results[i].shield != 'undefined', "shield defined for shield " + results[i].shield);
                        ok(typeof hit[results[i].shield] == 'undefined', "shield " + results[i].shield + " wasn't hit multiple times");
                        if(results[i].shield == 'A') {
                            equal(results[i].damage, 8, "Damage to target shield correct");
                        } else if (results[i].shield == 'B') {
                            equal(results[i].damage, 12, "Damage to left shield correct");
                        } else {
                            ok(false, "Wrong shield hit")
                        }      
                        hit[results[i].shield] = true;
                    } 
                });

                test("Testing PPD at range 7, roll 9 versus cloaking ship", function() {
                    var dieRollsMock = {
                            rolls: [4, 5],
                            total: 9
                        };
                    var results;

                    results = ppd.fire({
                        dieRolls: dieRollsMock,
                        range: 7,
                        targetShield: 'A',
                        isCloaking: true    
                    });

                    equal(results.length, 3, "three shield facings were hit");
                    var hit = {};
                    for(var i = 0; i < results.length; i++) {
                        ok(typeof results[i].shield != 'undefined', "shield defined for shield " + results[i].shield);
                        ok(typeof hit[results[i].shield] == 'undefined', "shield " + results[i].shield + " wasn't hit multiple times");
                        if(results[i].shield == 'A') {
                            equal(results[i].damage, 9, "Damage to target shield correct");
                        } else if (results[i].shield == 'B') {
                            equal(results[i].damage, 3, "Damage to left shield correct");
                        } else if (results[i].shield == 'F') {
                            equal(results[i].damage, 3, "Damage to right shield correct");
                        } else {
                            ok(false, "Wrong shield hit")
                        }      
                        hit[results[i].shield] = true;
                    }                    
                });

                test("Testing PPD at range 4, roll 2 against cloaked", function() {
                    var dieRollsMock = {
                            rolls: [1, 1],
                            total: 2
                        };
                    var results;

                    results = ppd.fire({
                        dieRolls: dieRollsMock,
                        range: 4,
                        targetShield: 'A',
                        isCloaked: true    
                    });

                    equal(results.length, 3, "three shield facings were hit");
                    var hit = {};
                    for(var i = 0; i < results.length; i++) {
                        ok(typeof results[i].shield != 'undefined', "shield defined for shield " + results[i].shield);
                        ok(typeof hit[results[i].shield] == 'undefined', "shield " + results[i].shield + " wasn't hit multiple times");
                        if(results[i].shield == 'A') {
                            equal(results[i].damage, 8, "Damage to target shield correct");
                        } else if (results[i].shield == 'B') {
                            equal(results[i].damage, 0, "Damage to left shield correct");
                        } else if (results[i].shield == 'F') {
                            equal(results[i].damage, 0, "Damage to right shield correct");
                        } else {
                            ok(false, "Wrong shield hit")
                        }      
                        hit[results[i].shield] = true;
                    }                    
                });

                test("Testing PPD at range 4, roll 2 on corner AB targetting A versus cloaked ship", function() {
                    var dieRollsMock = {
                            rolls: [1, 1],
                            total: 2
                        };
                    var results;

                    results = ppd.fire({
                        dieRolls: dieRollsMock,
                        range: 4,
                        targetShield: 'A',
                        secondTarget: 'B',
                        isCloaked: true    
                    });

                    equal(results.length, 2, "two shield facings were hit");
                    var hit = {};
                    for(var i = 0; i < results.length; i++) {
                        ok(typeof results[i].shield != 'undefined', "shield defined for shield " + results[i].shield);
                        ok(typeof hit[results[i].shield] == 'undefined', "shield " + results[i].shield + " wasn't hit multiple times");
                        if(results[i].shield == 'A') {
                            equal(results[i].damage, 4, "Damage to target shield correct");
                        } else if (results[i].shield == 'B') {
                            equal(results[i].damage, 4, "Damage to left shield correct");
                        } else {
                            ok(false, "Wrong shield hit")
                        }      
                        hit[results[i].shield] = true;
                    } 
                });

                test("Testing PPD at range 4, roll 2 against Hemisphere Shields", function() {
                    var dieRollsMock = {
                            rolls: [1, 1],
                            total: 2
                        };
                    var results;

                    results = ppd.fire({
                        dieRolls: dieRollsMock,
                        range: 4,
                        targetShield: 'A',
                        hasHemisphereShields: true    
                    });

                    equal(results.length, 2, "two shield facings were hit");
                    var hit = {};
                    for(var i = 0; i < results.length; i++) {
                        ok(typeof results[i].shield != 'undefined', "shield defined for shield " + results[i].shield);
                        ok(typeof hit[results[i].shield] == 'undefined', "shield " + results[i].shield + " wasn't hit multiple times");
                        if(results[i].shield == 'A') {
                            equal(results[i].damage, 20, "Damage to target shield correct");
                        } else if (results[i].shield == 'D') {
                            equal(results[i].damage, 4, "Damage to left shield correct");
                        } else {
                            ok(false, "Wrong shield hit")
                        }      
                        hit[results[i].shield] = true;
                    } 
                });

                test("Testing PPD at range 4, roll 2 against Hemisphere Shields and cloaked", function() {
                    var dieRollsMock = {
                            rolls: [1, 1],
                            total: 2
                        };
                    var results;

                    results = ppd.fire({
                        dieRolls: dieRollsMock,
                        range: 4,
                        targetShield: 'A',
                        hasHemisphereShields: true,
                        isCloaked: true   
                    });

                    equal(results.length, 2, "two shield facings were hit");
                    var hit = {};
                    for(var i = 0; i < results.length; i++) {
                        ok(typeof results[i].shield != 'undefined', "shield defined for shield " + results[i].shield);
                        ok(typeof hit[results[i].shield] == 'undefined', "shield " + results[i].shield + " wasn't hit multiple times");
                        if(results[i].shield == 'A') {
                            equal(results[i].damage, 8, "Damage to target shield correct");
                        } else if (results[i].shield == 'D') {
                            equal(results[i].damage, 0, "Damage to left shield correct");
                        } else {
                            ok(false, "Wrong shield hit")
                        }      
                        hit[results[i].shield] = true;
                    } 
                });
            }
        };
    }
);
