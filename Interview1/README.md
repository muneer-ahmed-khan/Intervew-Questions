# The interviewer asked me about the Transposition cipher program.

Secret Key: MEGABUCK

Plain text: I am being interviewed for the position of backend developer

i was required to solve this problem in a such way that Plain text to Transpose cipher in a row Fahsion.

it means that i need to first alphabetically give an order to secret key.

then i need to remove space from the input and then add charcter in each secret charcater array by thier order.

and finally output the cipher text.

below is the table that illustrate the process how it has to be done.

if we sort the secret we get the Alphabetic order like

### ABCEGKMU

now the table will show how each character of the input plain text will distribute to each character row wise of input.

| M(7) | E(4) | G(5) | A(1) | B(2) | U(8) | C(3) | K(6) |
| -----| -----| -----| -----| -----| -----| -----| -----|
| i    | a    | m    | b    | e    | i    | n    | g    |
| i    | n    | t    | e    | r    | v    | i    | e    |
| w    | e    | d    | f    | o    | r    | t    | h    |
| e    | p    | o    | s    | i    | t    | i    | o    |
| n    | o    | f    | b    | a    | c    | k    | e    |
| n    | d    | d    | e    | v    | e    | l    | o    |
| p    | e    | r    |      |      |      |      |      |
|      |      |      |      |      |      |      |      |


now i will need make output from this table in a such way that i get column wise all values from each column using alphbetical order.

ex. first A, then B, Then C and so on

for A the values are befsbe
for B the values are eroiav and soo on 

and the final output will be 
Output: befsbeeroiavnitiklanepodemtdofdrgehoeoiiwennpivrtce


so finally i have solved this problem and add the solution here on github.








