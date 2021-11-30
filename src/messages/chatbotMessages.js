
const messages = {

error_message:
`
Something went wrong, please try again later!
`,

incorrect_input:
`
Sorry, I didn't understand that. Please enter one of the options below!
`,


main_menu: 
`
*Hello there!*
What can I help you with today?

*1. Car Wash*
*2. Laundry*
*3. Cleaning*
*4. Gardening*
*5. Deliveries/Pickups*
*6. Errands/Shopping*

*A. More Info*
*B. Runner Registration*
*C. Speak to a SendMe Agent*
`,


/**
 * ========================================================================================
 * CAR WASHING USER JOURNEY MESSAGES
 * ========================================================================================
 */
car_wash_date:
`
Awesome, now tell me when you would like the car washing to be done.

*1. Now*
*2. After 30 minutes*
*3. After 1 hour*
`,

car_amount:
`
Great! Now please tell me how many cars you want washed.

*1. One Car*    
*2. Two Cars*
*3. Three Cars*
*4. Four Cars*
*5. Five Cars*
`,

car_wash_type:
`
Awesome! What type of what do you want?

*1. Outside Only*
*2. Inside And Oustide*
`,

car_location:
`
Great! We are almost done.
Where would you like the request to be completed?

*Please reply with the location:*

-Please use the WhatsApp location. You can do this by clicking on the paper clip icon.
`,

car_type:
`
Great! Now tell me the type of car you have.

*1. Sedan*
*2. Hatchback*
*3. Buckie*
*4. Taxi*
*5. Bus* 
`,

car_payment_type: 
`
How would you like to pay?

*1. Online*
*2. Cash*
`,

car_wash_payment_link:
`
One more step! please use the link to pay.

*Note* We do not handle payments we use a payment gateway approved by your bank.
`,

car_find_runner:
`
Awesome. Please wait while I get the closest runner to pick up your request!
`,
/**
 * ========================================================================================\
 */

/**
 * ========================================================================================
 * LAUNDRY USER JOURNEY
 * ========================================================================================
 */

laundry_date:
`
Awesome, now tell me when your laundry should be picked up.

*1. Now*
*2. After 30 minutes*
*3. After 1 hour*
`,

laundry_amount:
`
Great! Now please tell us how many baskets you want done
Pick one of the following options:

*1. One Basket*
*2. Two Baskets*
*3. Three Baskets*
*4. Four Baskets*
*5. Five Baskets*
`,

laundry_type:
`
Great! State whether this includes washing and ironing or only one.

*1. Washing Only*
*2. Washing And Ironing*
`,

laundry_location:
`
Great! We are almost done.
Where would you like the request to be completed?

*Please reply with the location:*

-Please use the WhatsApp location. You can do this by clicking on the paper clip icon.
`,

laundry_payment_type: 
`
How would you like to pay?

*1. Online*
*2. Cash*
`,

landry_payment_link:
`
One more step! please use the link to pay.

*Note* We do not handle payments we use a payment gateway approved by your bank.
`,

laundry_find_runner:
`
Awesome. Please wait while I get the closest runner to pick up your request!
`,
/**
 * ========================================================================================\
*/

/**
 * ========================================================================================
 * CLEANING USER JOURNEY
 * ========================================================================================
 */

cleaning_date:
`
Awesome, now tell me when the cleaner should arrive.

*1. Now*
*2. After 30 minutes*
*3. After 1 hour*
`,

cleaning_hours:
`
Great! Now please tell us how many hours you'll want the cleaning to be done

*1. One Hour*
*2. Two Hours*
*3. Three Hours*
*4. Four Hours*
*5. Five Hours*

*Note.* The hours you select cannot go above 4pm.

`,

cleaning_location:
`
Great! We are almost done.
Where would you like the request to be completed?

*Please reply with the location:*

-Please use the WhatsApp location. You can do this by clicking on the paper clip icon.
`,

cleaning_payment_type: 
`
How would you like to pay?

*1. Online*
*2. Cash*
`,

cleaning_payment_link:
`
One more step! please use the link to pay.

*Note* We do not handle payments we use a payment gateway approved by your bank.
`,

cleaning_find_runner:
`
Awesome. Please wait while I get the closest runner to pick up your request!
`,

/**
 * ========================================================================================\
*/

gardening_date:
`
Awesome. Now tell me when the gardener should arrive.

*1. Now*
*2. After 30 minutes*
*3. After 1 hour*
`,

gardening_yard_type:
`
Alright. What type of yard do you have?

*1. Township Yard*
*2. Big Surburb Yard*
`,

gardening_grass:
`
Awesome. Is the any grass that needs to be cut?

*1. Yes*
*2. No*
`,

gardening_location:
`
Great! We are almost done.
Where would you like the request to be completed?

*Please reply with the location:*

-Please use the WhatsApp location. You can do this by clicking on the paper clip icon.
`,

gardening_payment_type: 
`
How would you like to pay?

*1. Online*
*2. Cash*
`,

gardening_payment_link:
`
One more step! please use the link to pay.

*Note* We do not handle payments we use a payment gateway approved by your bank.
`,

gardening_find_runner:
`
Awesome. Please wait while I get the closest runner to pick up your request!
`,


/**
 * ========================================================================================\
*/

delivery_date:
`
Awesome, now tell me when the runner to arrive.

*1. Now*
*2. After 30 minutes*
*3. After 1 hour*
`,

delivery_need:
`
Great. Now tell me what your delivery requires.

*1. Needs A Person Only*
*2. Needs A Private Car*
*3. Needs A Normal Bakkie*
*4. Needs A Big Bakkie*
`,

delivery_pickup_location:
`
Great! We are almost done.
Where is the pickup point?

*Please reply with the pickup location:*

-Please use the WhatsApp location. You can do this by clicking on the paper clip icon.
`,

delivery_location:
`
Great! We are almost done.
Where is the delivery point

*Please reply with the delivery location:*

-Please use the WhatsApp location. You can do this by clicking on the paper clip icon.
`,

delivery_payment_type: 
`
How would you like to pay?

*1. Online*
*2. Cash*
`,

delivery_payment_link:
`
One more step! please use the link to pay.

*Note* We do not handle payments we use a payment gateway approved by your bank.
`,

delivery_find_runner:
`
Awesome. Please wait while I get the closest runner to pick up your request!
`,

/**
 * ========================================================================================\
*/

errand_date:
`
Awesome, now tell me when the runner should arrive.

*1. Now*
*2. After 30 minutes*
*3. After 1 hour*
`,

errand_need:
`
Great. Now tell me what your errand requires.

*1. Needs A Person Only*
*2. Needs A Private Car*
`,

errand_specifics:
`
Awesome. Please specify in words what you want to be done.

*Write a sentence of a list of things
`,

/**
 * ========================================================================================\
*/

}

export default messages;