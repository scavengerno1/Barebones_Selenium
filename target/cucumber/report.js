$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/amazon.feature");
formatter.feature({
  "line": 1,
  "name": "User can sign in to amazon account",
  "description": "",
  "id": "user-can-sign-in-to-amazon-account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User can sign into amazon using valid username and password",
  "description": "",
  "id": "user-can-sign-in-to-amazon-account;user-can-sign-into-amazon-using-valid-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am at amazon homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am clicking \"\u003cclick\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I am entering \"\u003cemail\u003e\" \"\u003cevalue\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I am clicking \"\u003ccontinue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I am entering \"\u003cpass\u003e\" \"\u003cpvalue\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I am clicking \"\u003csignin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I take screenshot \"\u003cscreenshot\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "user-can-sign-in-to-amazon-account;user-can-sign-into-amazon-using-valid-username-and-password;",
  "rows": [
    {
      "cells": [
        "click",
        "email",
        "evalue",
        "continue",
        "pass",
        "pvalue",
        "signin",
        "screenshot"
      ],
      "line": 13,
      "id": "user-can-sign-in-to-amazon-account;user-can-sign-into-amazon-using-valid-username-and-password;;1"
    },
    {
      "cells": [
        "clickSign",
        "enterEmail",
        "mazmi3091@gmail.com",
        "clickContinue",
        "enterPassword",
        "peoplentech123!!",
        "signinButton",
        "Amazon_valid_e_and_p"
      ],
      "line": 14,
      "id": "user-can-sign-in-to-amazon-account;user-can-sign-into-amazon-using-valid-username-and-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6269113543,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User can sign into amazon using valid username and password",
  "description": "",
  "id": "user-can-sign-in-to-amazon-account;user-can-sign-into-amazon-using-valid-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am at amazon homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am clicking \"clickSign\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I am entering \"enterEmail\" \"mazmi3091@gmail.com\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I am clicking \"clickContinue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I am entering \"enterPassword\" \"peoplentech123!!\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I am clicking \"signinButton\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I take screenshot \"Amazon_valid_e_and_p\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GUIStepDefinitions.homepage()"
});
formatter.result({
  "duration": 169968561,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clickSign",
      "offset": 15
    }
  ],
  "location": "GUIStepDefinitions.hello_sign_in(String)"
});
formatter.result({
  "duration": 1492238427,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enterEmail",
      "offset": 15
    },
    {
      "val": "mazmi3091@gmail.com",
      "offset": 28
    }
  ],
  "location": "GUIStepDefinitions.enterEmail(String,String)"
});
formatter.result({
  "duration": 1164280917,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clickContinue",
      "offset": 15
    }
  ],
  "location": "GUIStepDefinitions.hello_sign_in(String)"
});
formatter.result({
  "duration": 1454534917,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enterPassword",
      "offset": 15
    },
    {
      "val": "peoplentech123!!",
      "offset": 31
    }
  ],
  "location": "GUIStepDefinitions.enterEmail(String,String)"
});
formatter.result({
  "duration": 1126115863,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "signinButton",
      "offset": 15
    }
  ],
  "location": "GUIStepDefinitions.hello_sign_in(String)"
});
formatter.result({
  "duration": 3265779198,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon_valid_e_and_p",
      "offset": 19
    }
  ],
  "location": "GUIStepDefinitions.screenShot(String)"
});
formatter.result({
  "duration": 546236335,
  "status": "passed"
});
formatter.after({
  "duration": 951481151,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "User cannot sign into amazon using valid username and invalid password",
  "description": "",
  "id": "user-can-sign-in-to-amazon-account;user-cannot-sign-into-amazon-using-valid-username-and-invalid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I am at amazon homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I am clicking \"\u003cclick\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I am entering \"\u003cemail\u003e\" \"\u003cevalue\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I am clicking \"\u003ccontinue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I am entering \"\u003cpass\u003e\" \"\u003cpvalue\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I am clicking \"\u003csignin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I take screenshot \"\u003cscreenshot\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "user-can-sign-in-to-amazon-account;user-cannot-sign-into-amazon-using-valid-username-and-invalid-password;",
  "rows": [
    {
      "cells": [
        "click",
        "email",
        "evalue",
        "continue",
        "pass",
        "pvalue",
        "signin",
        "screenshot"
      ],
      "line": 27,
      "id": "user-can-sign-in-to-amazon-account;user-cannot-sign-into-amazon-using-valid-username-and-invalid-password;;1"
    },
    {
      "cells": [
        "clickSign",
        "enterEmail",
        "mazmi3091@gmail.com",
        "clickContinue",
        "enterPassword",
        "peoplentech",
        "signinButton",
        "Amazon_valid_e"
      ],
      "line": 28,
      "id": "user-can-sign-in-to-amazon-account;user-cannot-sign-into-amazon-using-valid-username-and-invalid-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6247007436,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User cannot sign into amazon using valid username and invalid password",
  "description": "",
  "id": "user-can-sign-in-to-amazon-account;user-cannot-sign-into-amazon-using-valid-username-and-invalid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I am at amazon homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I am clicking \"clickSign\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I am entering \"enterEmail\" \"mazmi3091@gmail.com\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I am clicking \"clickContinue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I am entering \"enterPassword\" \"peoplentech\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I am clicking \"signinButton\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I take screenshot \"Amazon_valid_e\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GUIStepDefinitions.homepage()"
});
formatter.result({
  "duration": 16503285,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clickSign",
      "offset": 15
    }
  ],
  "location": "GUIStepDefinitions.hello_sign_in(String)"
});
formatter.result({
  "duration": 1577352961,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enterEmail",
      "offset": 15
    },
    {
      "val": "mazmi3091@gmail.com",
      "offset": 28
    }
  ],
  "location": "GUIStepDefinitions.enterEmail(String,String)"
});
formatter.result({
  "duration": 1134749962,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clickContinue",
      "offset": 15
    }
  ],
  "location": "GUIStepDefinitions.hello_sign_in(String)"
});
formatter.result({
  "duration": 1491692061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enterPassword",
      "offset": 15
    },
    {
      "val": "peoplentech",
      "offset": 31
    }
  ],
  "location": "GUIStepDefinitions.enterEmail(String,String)"
});
formatter.result({
  "duration": 1082110423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "signinButton",
      "offset": 15
    }
  ],
  "location": "GUIStepDefinitions.hello_sign_in(String)"
});
formatter.result({
  "duration": 1856488252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon_valid_e",
      "offset": 19
    }
  ],
  "location": "GUIStepDefinitions.screenShot(String)"
});
formatter.result({
  "duration": 313301306,
  "status": "passed"
});
formatter.after({
  "duration": 792098817,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "User cannot sign into amazon using invalid username and valid password",
  "description": "",
  "id": "user-can-sign-in-to-amazon-account;user-cannot-sign-into-amazon-using-invalid-username-and-valid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "I am at amazon homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I am clicking \"\u003cclick\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I am entering \"\u003cemail\u003e\" \"\u003cevalue\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I am clicking \"\u003ccontinue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I am entering \"\u003cpass\u003e\" \"\u003cpvalue\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I am clicking \"\u003csignin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I take screenshot \"\u003cscreenshot\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "user-can-sign-in-to-amazon-account;user-cannot-sign-into-amazon-using-invalid-username-and-valid-password;",
  "rows": [
    {
      "cells": [
        "click",
        "email",
        "evalue",
        "continue",
        "pass",
        "pvalue",
        "signin",
        "screenshot"
      ],
      "line": 41,
      "id": "user-can-sign-in-to-amazon-account;user-cannot-sign-into-amazon-using-invalid-username-and-valid-password;;1"
    },
    {
      "cells": [
        "clickSign",
        "enterEmail",
        "nomail@gmail.com",
        "clickContinue",
        "enterPassword",
        "peoplentech123!!",
        "signinButton",
        "Amazon_valid_p"
      ],
      "line": 42,
      "id": "user-can-sign-in-to-amazon-account;user-cannot-sign-into-amazon-using-invalid-username-and-valid-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6040735391,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "User cannot sign into amazon using invalid username and valid password",
  "description": "",
  "id": "user-can-sign-in-to-amazon-account;user-cannot-sign-into-amazon-using-invalid-username-and-valid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "I am at amazon homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I am clicking \"clickSign\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I am entering \"enterEmail\" \"nomail@gmail.com\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I am clicking \"clickContinue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I am entering \"enterPassword\" \"peoplentech123!!\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I am clicking \"signinButton\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I take screenshot \"Amazon_valid_p\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GUIStepDefinitions.homepage()"
});
formatter.result({
  "duration": 56350302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clickSign",
      "offset": 15
    }
  ],
  "location": "GUIStepDefinitions.hello_sign_in(String)"
});
formatter.result({
  "duration": 1611259374,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enterEmail",
      "offset": 15
    },
    {
      "val": "nomail@gmail.com",
      "offset": 28
    }
  ],
  "location": "GUIStepDefinitions.enterEmail(String,String)"
});
formatter.result({
  "duration": 1139158626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clickContinue",
      "offset": 15
    }
  ],
  "location": "GUIStepDefinitions.hello_sign_in(String)"
});
formatter.result({
  "duration": 1688665311,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enterPassword",
      "offset": 15
    },
    {
      "val": "peoplentech123!!",
      "offset": 31
    }
  ],
  "location": "GUIStepDefinitions.enterEmail(String,String)"
});
formatter.result({
  "duration": 1195128886,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "signinButton",
      "offset": 15
    }
  ],
  "location": "GUIStepDefinitions.hello_sign_in(String)"
});
formatter.result({
  "duration": 2059635142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon_valid_p",
      "offset": 19
    }
  ],
  "location": "GUIStepDefinitions.screenShot(String)"
});
formatter.result({
  "duration": 341097170,
  "status": "passed"
});
formatter.after({
  "duration": 802691383,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 45,
  "name": "User cannot sign into amazon using invalid username and invalid password",
  "description": "",
  "id": "user-can-sign-in-to-amazon-account;user-cannot-sign-into-amazon-using-invalid-username-and-invalid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "I am at amazon homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I am clicking \"\u003cclick\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "I am entering \"\u003cemail\u003e\" \"\u003cevalue\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "I am clicking \"\u003ccontinue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I am entering \"\u003cpass\u003e\" \"\u003cpvalue\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "I am clicking \"\u003csignin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I take screenshot \"\u003cscreenshot\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 54,
  "name": "",
  "description": "",
  "id": "user-can-sign-in-to-amazon-account;user-cannot-sign-into-amazon-using-invalid-username-and-invalid-password;",
  "rows": [
    {
      "cells": [
        "click",
        "email",
        "evalue",
        "continue",
        "pass",
        "pvalue",
        "signin",
        "screenshot"
      ],
      "line": 55,
      "id": "user-can-sign-in-to-amazon-account;user-cannot-sign-into-amazon-using-invalid-username-and-invalid-password;;1"
    },
    {
      "cells": [
        "clickSign",
        "enterEmail",
        "nomail@gmail.com",
        "clickContinue",
        "enterPassword",
        "peoplentech",
        "signinButton",
        "Amazon_invalid_e_and_p"
      ],
      "line": 56,
      "id": "user-can-sign-in-to-amazon-account;user-cannot-sign-into-amazon-using-invalid-username-and-invalid-password;;2"
    },
    {
      "cells": [
        "clickSign",
        "enterEmail",
        "nomail@yahoo.com",
        "clickContinue",
        "enterPassword",
        "peoplentech123321",
        "signinButton",
        "Amazon_invalid_e_and_p"
      ],
      "line": 57,
      "id": "user-can-sign-in-to-amazon-account;user-cannot-sign-into-amazon-using-invalid-username-and-invalid-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7713993470,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "User cannot sign into amazon using invalid username and invalid password",
  "description": "",
  "id": "user-can-sign-in-to-amazon-account;user-cannot-sign-into-amazon-using-invalid-username-and-invalid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "I am at amazon homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I am clicking \"clickSign\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "I am entering \"enterEmail\" \"nomail@gmail.com\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "I am clicking \"clickContinue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I am entering \"enterPassword\" \"peoplentech\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "I am clicking \"signinButton\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I take screenshot \"Amazon_invalid_e_and_p\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GUIStepDefinitions.homepage()"
});
formatter.result({
  "duration": 30349901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clickSign",
      "offset": 15
    }
  ],
  "location": "GUIStepDefinitions.hello_sign_in(String)"
});
formatter.result({
  "duration": 1631184241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enterEmail",
      "offset": 15
    },
    {
      "val": "nomail@gmail.com",
      "offset": 28
    }
  ],
  "location": "GUIStepDefinitions.enterEmail(String,String)"
});
formatter.result({
  "duration": 1161786045,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clickContinue",
      "offset": 15
    }
  ],
  "location": "GUIStepDefinitions.hello_sign_in(String)"
});
formatter.result({
  "duration": 1714638244,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enterPassword",
      "offset": 15
    },
    {
      "val": "peoplentech",
      "offset": 31
    }
  ],
  "location": "GUIStepDefinitions.enterEmail(String,String)"
});
formatter.result({
  "duration": 1108164857,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "signinButton",
      "offset": 15
    }
  ],
  "location": "GUIStepDefinitions.hello_sign_in(String)"
});
formatter.result({
  "duration": 3321757911,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon_invalid_e_and_p",
      "offset": 19
    }
  ],
  "location": "GUIStepDefinitions.screenShot(String)"
});
formatter.result({
  "duration": 389389625,
  "status": "passed"
});
formatter.after({
  "duration": 835338740,
  "status": "passed"
});
formatter.before({
  "duration": 5644452494,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "User cannot sign into amazon using invalid username and invalid password",
  "description": "",
  "id": "user-can-sign-in-to-amazon-account;user-cannot-sign-into-amazon-using-invalid-username-and-invalid-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "I am at amazon homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I am clicking \"clickSign\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "I am entering \"enterEmail\" \"nomail@yahoo.com\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "I am clicking \"clickContinue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I am entering \"enterPassword\" \"peoplentech123321\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "I am clicking \"signinButton\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I take screenshot \"Amazon_invalid_e_and_p\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GUIStepDefinitions.homepage()"
});
formatter.result({
  "duration": 225471543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clickSign",
      "offset": 15
    }
  ],
  "location": "GUIStepDefinitions.hello_sign_in(String)"
});
formatter.result({
  "duration": 1756333247,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enterEmail",
      "offset": 15
    },
    {
      "val": "nomail@yahoo.com",
      "offset": 28
    }
  ],
  "location": "GUIStepDefinitions.enterEmail(String,String)"
});
formatter.result({
  "duration": 1115484357,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clickContinue",
      "offset": 15
    }
  ],
  "location": "GUIStepDefinitions.hello_sign_in(String)"
});
formatter.result({
  "duration": 1718593816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enterPassword",
      "offset": 15
    },
    {
      "val": "peoplentech123321",
      "offset": 31
    }
  ],
  "location": "GUIStepDefinitions.enterEmail(String,String)"
});
formatter.result({
  "duration": 1114923200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "signinButton",
      "offset": 15
    }
  ],
  "location": "GUIStepDefinitions.hello_sign_in(String)"
});
formatter.result({
  "duration": 2581485422,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon_invalid_e_and_p",
      "offset": 19
    }
  ],
  "location": "GUIStepDefinitions.screenShot(String)"
});
formatter.result({
  "duration": 347878755,
  "status": "passed"
});
formatter.after({
  "duration": 803147191,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 60,
  "name": "User cannot sign into amazon using only email",
  "description": "",
  "id": "user-can-sign-in-to-amazon-account;user-cannot-sign-into-amazon-using-only-email",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 61,
  "name": "I am at amazon homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "I am clicking \"\u003cclick\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "I am entering \"\u003cemail\u003e\" \"\u003cevalue\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "I am clicking \"\u003ccontinue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I am clicking \"\u003csignin\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "I take screenshot \"\u003cscreenshot\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 68,
  "name": "",
  "description": "",
  "id": "user-can-sign-in-to-amazon-account;user-cannot-sign-into-amazon-using-only-email;",
  "rows": [
    {
      "cells": [
        "click",
        "email",
        "evalue",
        "continue",
        "signin",
        "screenshot"
      ],
      "line": 69,
      "id": "user-can-sign-in-to-amazon-account;user-cannot-sign-into-amazon-using-only-email;;1"
    },
    {
      "cells": [
        "clickSign",
        "enterEmail",
        "nomail@gmail.com",
        "clickContinue",
        "signinButton",
        "Amazon_only_e"
      ],
      "line": 70,
      "id": "user-can-sign-in-to-amazon-account;user-cannot-sign-into-amazon-using-only-email;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6122553916,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "User cannot sign into amazon using only email",
  "description": "",
  "id": "user-can-sign-in-to-amazon-account;user-cannot-sign-into-amazon-using-only-email;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 61,
  "name": "I am at amazon homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "I am clicking \"clickSign\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "I am entering \"enterEmail\" \"nomail@gmail.com\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "I am clicking \"clickContinue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I am clicking \"signinButton\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "I take screenshot \"Amazon_only_e\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GUIStepDefinitions.homepage()"
});
formatter.result({
  "duration": 144663645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clickSign",
      "offset": 15
    }
  ],
  "location": "GUIStepDefinitions.hello_sign_in(String)"
});
formatter.result({
  "duration": 1558589348,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enterEmail",
      "offset": 15
    },
    {
      "val": "nomail@gmail.com",
      "offset": 28
    }
  ],
  "location": "GUIStepDefinitions.enterEmail(String,String)"
});
formatter.result({
  "duration": 1135110382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clickContinue",
      "offset": 15
    }
  ],
  "location": "GUIStepDefinitions.hello_sign_in(String)"
});
formatter.result({
  "duration": 1851813952,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "signinButton",
      "offset": 15
    }
  ],
  "location": "GUIStepDefinitions.hello_sign_in(String)"
});
formatter.result({
  "duration": 1168136875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon_only_e",
      "offset": 19
    }
  ],
  "location": "GUIStepDefinitions.screenShot(String)"
});
formatter.result({
  "duration": 334100360,
  "status": "passed"
});
formatter.after({
  "duration": 786666848,
  "status": "passed"
});
});