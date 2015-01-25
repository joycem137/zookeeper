define(
    [
        "app/model/weapons/StandardIonCannon"
    ],
    function(StandardIonCannon) {
        return {
            run: function() {
                module('Ion Cannon Tests');
                var ion = new StandardIonCannon();

                test('Range 0, Roll 2', function() {
                    var dieRollsMock = {
                            rolls: [1, 1],
                            total: 2
                        };
                    var results;

                    results = ion.fire({
                        dieRolls: dieRollsMock,
                        range: 0,
                        targetShield: 'A'
                    });

                    equal(results.length, 1, "One shield hit");
                    equal(results[0].shield, 'A', "Target Shield hit");
                    equal(results[0].damage, 6, "Correct damage to target shield");
                });

                test('Range 0, Roll 11', function() {
                    var dieRollsMock = {
                            rolls: [5, 6],
                            total: 11
                        };
                    var results;

                    results = ion.fire({
                        dieRolls: dieRollsMock,
                        range: 0,
                        targetShield: 'A'
                    });

                    equal(results.length, 0, "No shield hit");
                });

                test('Range 0, Roll 2 targetting shield D', function() {
                    var dieRollsMock = {
                            rolls: [1, 1],
                            total: 2
                        };
                    var results;

                    results = ion.fire({
                        dieRolls: dieRollsMock,
                        range: 0,
                        targetShield: 'D'
                    });

                    equal(results.length, 1, "One shield hit");
                    equal(results[0].shield, 'D', "Target Shield hit");
                    equal(results[0].damage, 6, "Correct damage to target shield");
                });

                test('Range 25, Roll 4', function() {
                    var dieRollsMock = {
                            rolls: [2, 2],
                            total: 4
                        };
                    var results;

                    results = ion.fire({
                        dieRolls: dieRollsMock,
                        range: 25,
                        targetShield: 'A'
                    });

                    equal(results.length, 1, "One shield hit");
                    equal(results[0].shield, 'A', "Target Shield hit");
                    equal(results[0].damage, 6, "Correct damage to target shield");
                });

                test('Range 25, Roll 5', function() {
                    var dieRollsMock = {
                            rolls: [3, 2],
                            total: 5
                        };
                    var results;

                    results = ion.fire({
                        dieRolls: dieRollsMock,
                        range: 25,
                        targetShield: 'A'
                    });

                    equal(results.length, 0, "No shield hit");
                });

                test('Range 5, Roll 8 + 1', function() {
                    var dieRollsMock = {
                            rolls: [4, 4],
                            total: 8
                        };
                    var results;

                    results = ion.fire({
                        dieRolls: dieRollsMock,
                        range: 5,
                        targetShield: 'A',
                        modifier: 1
                    });

                    equal(results.length, 0, "No shield hit");
                });

                test('Range 0, Roll 11', function() {
                    var dieRollsMock = {
                            rolls: [5, 6],
                            total: 11
                        };
                    var results;

                    results = ion.fire({
                        dieRolls: dieRollsMock,
                        range: 0,
                        targetShield: 'A'
                    });

                    equal(results.length, 0, "No shield hit");
                });

                test('Range 0, Roll 7 + 5', function() {
                    var dieRollsMock = {
                            rolls: [5, 2],
                            total: 7
                        };
                    var results;

                    results = ion.fire({
                        dieRolls: dieRollsMock,
                        range: 0,
                        targetShield: 'A',
                        modifier: 5
                    });

                    equal(results.length, 1, "One shield hit");
                    equal(results[0].shield, 'A', "Target Shield hit");
                    equal(results[0].damage, 6, "Correct damage to target shield");
                });

                test('Range 1, Roll 9 Cloaking', function() {
                    var dieRollsMock = {
                            rolls: [5, 4],
                            total: 9
                        };
                    var results;

                    results = ion.fire({
                        dieRolls: dieRollsMock,
                        range: 1,
                        targetShield: 'A',
                        isCloaking: true
                    });

                    equal(results.length, 0, "No shield hit");
                });

                test('Range 0, Roll 4 Cloaked', function() {
                    var dieRollsMock = {
                            rolls: [2, 2],
                            total: 4
                        };
                    var results;

                    results = ion.fire({
                        dieRolls: dieRollsMock,
                        range: 0,
                        targetShield: 'A',
                        isCloaked: true
                    });

                    equal(results.length, 1, "One shield hit");
                    equal(results[0].shield, 'A', "Target Shield hit");
                    equal(results[0].damage, 3, "Correct damage to target shield");
                });
            }
        };
    }
);
