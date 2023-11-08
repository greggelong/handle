# I feel I am still a handel

## a silver a handle that is a passage way to other worlds

a small sketch inspired by Artist Redjade Yuan

https://www.instagram.com/yuanredjade/


- [] need to make a loading screen for all the assets 

iphone is goofy about touches need to improve this interaction.

to deal with the iphone touch I had to change from mouseClicked to 

touchStarted

this had two  effects

1. that android would bounce (if mousePressed diddn't return false)

2. some browsers would not do the interaction with the mouse

Solution was to 

for 1 add a debounce using time since last touch and 500 mili seconds

for 2 was to have the mousePressed function call touch

this seems to work will have to have someone test on Iphon for me I am 

10/29/2023,  working and loading on ios, android and computer browsers
