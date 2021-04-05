# Decoder Ring Project

### A collection of JavaScript algorithms used to encode and decode messages.

- Caesar encodes and decodes messages by providing a message to encode or decode, and a number to 'shift' in the alphabet.
    - Example: calling caesar("Zebra Magazine", 3) would encode to "cheud pdjdclqh"

- Polybius encodes and decodes messages by assigning each letter to a 2-digit number.
    - Example: calling polybius("message") would encode to "23513434112251"

- Substitution cipher encodes and decodes by providing the function with a message to encode or decode, and a 'substitution alphabet' to match against the regular alphabet.
    - Example: calling substitution("message", "plmoknijbuhvygctfxrdzeswaq") would encode to "ykrrpik"

**All functions ignore capital letters and maintain spaces and symbols throughout.**