define(
    [
        "app/model/weapons/PLC"
    ],
    function(PLC) {
        return {
            run: function() {
                module('Plasma Carronade Tests');
                var plc2 = new PLC(2);

                //test the Plasma Carronades weapons
                test('Testing Plasma Carronade 2 with die roll 6', function() {
                    var dieRollsMock = {
                        rolls: [6],
                        total: 6
                    };
                    var results = plc2.fire({
                        dieRolls: dieRollsMock,
                        range: 3,
                        targetShield: 'A'
                    });
                    equal(results[0].damage, 4, "PLC-2 does 4 damage at range 3, roll 6 with a modifier of 0.");
                    equal(results[0].shield, 'A', "PLC-2 hits shield A at range 3, roll 6 with a modifier of 0.");
                });

                test('Testing Plasma Carronade 2 with die roll 2', function() {
                    var dieRollsMock = {
                        rolls: [2],
                        total: 2
                    };
                    var results = plc2.fire({
                        dieRolls: dieRollsMock,
                        range: 3,
                        targetShield: 'A'
                    });
                    equal(results[0].damage, 5, "PLC-2 does 5 damage at range 3, roll 2 with a modifier of 0.");

                    results = plc2.fire({
                        dieRolls: dieRollsMock,
                        range: 3,
                        targetShield: 'A',
                        modifier: 3
                    });
                    equal(results[0].damage, 4, "PLC-2 does 4 damage at range 3, roll 2 with a modifier of 3.");
                });

                test('Testing Plasma Carronade 2 with die roll 1', function() {
                    var dieRollsMock = {
                        rolls: [1],
                        total: 1
                    };
                    var results = plc2.fire({
                        dieRolls: dieRollsMock,
                        range: 3,
                        targetShield: 'A',
                        modifier: 5
                    });
                    equal(results[0].damage, 5, "PLC-2 does 5 damage at range 3, roll 1 with a modifier of 5.");
                });

                test('Testing Plasma Carronade 2 with die roll 6', function() {
                    var dieRollsMock = {
                        rolls: [6],
                        total: 6
                    };
                    var results = plc2.fire({
                        dieRolls: dieRollsMock,
                        range: 3,
                        targetShield: 'A',
                        modifier: 1
                    });
                    equal(results[0].damage, 3, "PLC-2 does 3 damage at range 3, roll 6 with a modifier of 1.");

                    results = plc2.fire({
                        dieRolls: dieRollsMock,
                        range: 3,
                        targetShield: 'A',
                        modifier: 3
                    });
                    equal(results.length, 0, "PLC-2 misses at range 3, roll 6 with a modifier of 3.");
                });

                var plc5 = new PLC(5);
                test('Testing Plasma Carronade 5', function() {
                    var dieRollsMock = {
                        rolls: [6],
                        total: 6
                    };
                    var results = plc5.fire({
                        dieRolls: dieRollsMock,
                        range: 3,
                        targetShield: 'A',
                        modifier: 5
                    });
                    equal(results[0].damage, 4, "PLC-5 does 4 damage at range 3, roll 6 with a modifier of 5.");
                });
            }
        }
    }
);