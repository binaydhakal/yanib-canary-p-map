# Controlled review acceptance

These files are deliberate Yanib integration fixtures, not production code or customer proof.
They are outside the package's published `files` list and exported API.

Baseline: `checkoutTotal(2)` is 2500 cents and `checkoutTotal(0)` is zero. A later test PR
changes the producer while leaving this caller untouched. Review the actual dependency,
consequence, and revision, not merely whether a comment appears.

The existing p-map/p-filter/p-all package relationships provide the separate selected and
excluded cross-repository cases. Only the owner's three canary repositories are in scope.

Run each acceptance observation against the current pull-request head and the saved scope.
