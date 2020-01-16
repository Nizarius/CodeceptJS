(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{258:function(s,e,t){"use strict";t.r(e);var a=t(0),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[s._v("#")]),s._v(" Commands")]),s._v(" "),t("h2",{attrs:{id:"run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[s._v("#")]),s._v(" Run")]),s._v(" "),t("p",[s._v("Executes tests. Requires "),t("code",[s._v("codecept.conf.js")]),s._v(" config to be present in provided path.")]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("Run all tests from current dir")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("npx codeceptjs run\n")])])]),t("p",[s._v("Load config and run tests from "),t("code",[s._v("test")]),s._v(" dir")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("npx codeceptjs run -c "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])])]),t("p",[s._v('Run only tests with "signin" word in name')]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("npx codeceptjs run --grep "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"signin"')]),s._v("\n")])])]),t("p",[s._v('Run all tests without "@IEOnly" word in name')]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("npx codeceptjs run --grep "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@IEOnly"')]),s._v(" --invert\n")])])]),t("p",[s._v("Run single test [path to codecept.js] [test filename]")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("npx codeceptjs run github_test.js\n")])])]),t("p",[s._v("Run single test with steps printed")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("npx codeceptjs run github_test.js --steps\n")])])]),t("p",[s._v("Run single test in debug mode")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("npx codeceptjs run github_test.js --debug\n")])])]),t("p",[s._v("Run test with internal logs printed (global promises, and events).")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("npx codeceptjs run github_test.js --verbose\n")])])]),t("p",[s._v("Select config file manually ("),t("code",[s._v("-c")]),s._v(" or "),t("code",[s._v("--config")]),s._v(" option)")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("npx codeceptjs run -c my.codecept.conf.js\nnpx codeceptjs run --config path/to/codecept.json\n")])])]),t("p",[s._v("Override config on the fly. Provide valid JSON which will be merged into current config:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("npx codeceptjs run --override "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{ "helpers": {"WebDriver": {"browser": "chrome"}}}\'')]),s._v("\n")])])]),t("p",[s._v("Run tests and produce xunit report:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("npx codeceptjs run --reporter xunit\n")])])]),t("p",[s._v("Use any of "),t("a",{attrs:{href:"https://github.com/mochajs/mocha/tree/master/lib/reporters",target:"_blank",rel:"noopener noreferrer"}},[s._v("Mocha reporters"),t("OutboundLink")],1),s._v(" used.")]),s._v(" "),t("h2",{attrs:{id:"run-workers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-workers"}},[s._v("#")]),s._v(" Run Workers")]),s._v(" "),t("p",[s._v("Run tests in parallel threads.")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npx codeceptjs run-workers 3\n")])])]),t("h2",{attrs:{id:"run-rerun"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-rerun"}},[s._v("#")]),s._v(" Run Rerun "),t("Badge",{attrs:{text:"Since 2.4",type:"warning"}})],1),s._v(" "),t("p",[s._v("Run tests multiple times to detect and fix flaky tests.")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npx codeceptjs run-rerun\n")])])]),t("p",[s._v("For this command configuration is required:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// inside codecept.conf.js")]),s._v("\n  rerun"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// how many times all tests should pass")]),s._v("\n    minSuccess"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// how many times to try to rerun all tests")]),s._v("\n    maxReruns"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("Use Cases:")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("minSuccess: 1, maxReruns: 5")]),s._v(" - run all tests no more than 5 times, until first successful run.")]),s._v(" "),t("li",[t("code",[s._v("minSuccess: 3, maxReruns: 5")]),s._v(" - run all tests no more than 5 times, until reaching 3 successfull runs.")]),s._v(" "),t("li",[t("code",[s._v("minSuccess: 10, maxReruns: 10")]),s._v(" - run all tests exactly 10 times, to check their stability.")])]),s._v(" "),t("h2",{attrs:{id:"dry-run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dry-run"}},[s._v("#")]),s._v(" Dry Run")]),s._v(" "),t("p",[s._v("Prints test scenarios without executing them")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npx codeceptjs dry-run\n")])])]),t("p",[s._v("When passed "),t("code",[s._v("--steps")]),s._v(" or "),t("code",[s._v("--debug")]),s._v(" option runs tests, disabling all plugins and helpers, so you can get step-by-step report with no tests actually executed.")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npx codeceptjs dry-run --steps\n")])])]),t("p",[s._v("If a plugin needs to be enabled in "),t("code",[s._v("dry-run")]),s._v(" mode, pass its name in "),t("code",[s._v("-p")]),s._v(" option:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npx codeceptjs dry-run --steps -p allure\n")])])]),t("p",[s._v("To enable bootstrap script in dry-run mode, pass in "),t("code",[s._v("--bootstrap")]),s._v(" option when running with "),t("code",[s._v("--steps")]),s._v(" or "),t("code",[s._v("--debug")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npx codeceptjs dry-run --steps --bootstrap\n")])])]),t("h2",{attrs:{id:"run-multiple"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-multiple"}},[s._v("#")]),s._v(" Run Multiple")]),s._v(" "),t("p",[s._v("Run multiple suites. Unlike "),t("code",[s._v("run-workers")]),s._v(" spawns processes to execute tests.\n"),t("a",{attrs:{href:"/advanced#multiple-browsers-execution"}},[s._v("Requires additional configuration")]),s._v(" and can be used to execute tests in multiple browsers.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("npx codeceptjs run-multiple smoke:chrome regression:firefox\n")])])]),t("h2",{attrs:{id:"init"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#init"}},[s._v("#")]),s._v(" Init")]),s._v(" "),t("p",[s._v("Creates "),t("code",[s._v("codecept.conf.js")]),s._v(" file in current directory:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("npx codeceptjs init\n")])])]),t("p",[s._v("Or in provided path")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("npx codecept init "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])])]),t("h2",{attrs:{id:"migrate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#migrate"}},[s._v("#")]),s._v(" Migrate")]),s._v(" "),t("p",[s._v("Migrate your current "),t("code",[s._v("codecept.json")]),s._v(" to "),t("code",[s._v("codecept.conf.js")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("npx codeceptjs migrate\n")])])]),t("h2",{attrs:{id:"shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shell"}},[s._v("#")]),s._v(" Shell")]),s._v(" "),t("p",[s._v("Interactive shell. Allows to try "),t("code",[s._v("I.")]),s._v(" commands in runtime")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("npx codeceptjs shell\n")])])]),t("h2",{attrs:{id:"generators"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generators"}},[s._v("#")]),s._v(" Generators")]),s._v(" "),t("p",[s._v("Create new test")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("npx codeceptjs generate:test\n")])])]),t("p",[s._v("Create new pageobject")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("npx codeceptjs generate:pageobject\n")])])]),t("p",[s._v("Create new helper")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("npx codeceptjs generate:helper\n")])])]),t("h2",{attrs:{id:"typescript-definitions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#typescript-definitions"}},[s._v("#")]),s._v(" TypeScript Definitions")]),s._v(" "),t("p",[s._v("TypeScript Definitions allows IDEs to provide autocompletion when writing tests.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("npx codeceptjs def\nnpx codeceptjs def --config path/to/codecept.json\n")])])]),t("p",[s._v("After doing that IDE should provide autocompletion for "),t("code",[s._v("I")]),s._v(" object inside "),t("code",[s._v("Scenario")]),s._v(" and "),t("code",[s._v("within")]),s._v(" blocks.")]),s._v(" "),t("p",[s._v("Add optional parameter "),t("code",[s._v("output")]),s._v(" (or shortcat "),t("code",[s._v("-o")]),s._v("), if you want to place your definition file in specific folder:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("npx codeceptjs def --output ./tests/typings\nnpx codeceptjs def -o ./tests/typings\n")])])]),t("h2",{attrs:{id:"list-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list-commands"}},[s._v("#")]),s._v(" List Commands")]),s._v(" "),t("p",[s._v("Prints all available methods of "),t("code",[s._v("I")]),s._v(" to console")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("npx codeceptjs list\n")])])]),t("h2",{attrs:{id:"local-environment-information"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#local-environment-information"}},[s._v("#")]),s._v(" Local Environment Information")]),s._v(" "),t("p",[s._v("Prints debugging information concerning the local environment")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("npx codeceptjs info\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);