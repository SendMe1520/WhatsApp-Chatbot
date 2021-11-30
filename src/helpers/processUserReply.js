import Requests from "../classes/Requests.js";

const processReply = (req, currentStep) =>{
    console.log('Executing processReply')

    switch(currentStep){
        case 'main_menu':
            let db = ''
            switch(req.body.Body){

                case '1':
                case 'car wash':
                    Requests.initializeRequest(req.body.WaId, 'Car Wash', 'car_wash_requests')
                    return {current_step: 'car_wash_date', previous_step: 'main_menu'};

                case '2':
                case 'laundry':
                    Requests.initializeRequest(req.body.WaId, 'Laundry', 'laundry_requests')
                    return {current_step: 'laundry_date', previous_step: 'main_menu'};
                    
                case '3':
                case 'cleaning':
                    Requests.initializeRequest(req.body.WaId, 'Cleaning', 'cleaning_requests')
                    return {current_step: 'cleaning_date', previous_step: 'main_menu'};
                    
                case '4':
                case 'gardening':
                    Requests.initializeRequest(req.body.WaId, 'Gardening', 'gardening_requests')
                    return {current_step: 'gardening_date', previous_step: 'main_menu'};
                    
                case '5':
                case 'delivery':
                    Requests.initializeRequest(req.body.WaId, 'Delivery', 'delivery_requests')
                    return{current_step: 'delivery_date', previous_step: 'main_menu'}
                    
                case '6':
                case 'errand':
                case 'shopping':
                    Requests.initializeRequest(req.body.WaId, 'Errand', 'errand_requests')
                    return {};
                    
                case 'A':
                case 'more info':
                    return {};
                    
                case 'B':
                case 'runner registration':
                case 'registration':
                    return {};
                    
                default:
                    return false;

            }

        
        /**
         * CAR WASH========================================
         */
        case 'car_wash_date':
            switch (req.body.Body){

                case '1':
                case 'Now':
                    Requests.updateRequest(req.body.WaId, {when: 'Now'}, 'car_wash_requests')
                    return {current_step: 'car_amount', previous_step: 'car_wash_date'};

                case '2':
                    Requests.updateRequest(req.body.WaId, {when: 'In 30 minutes'}, 'car_wash_requests')
                    return {current_step: 'car_amount', previous_step: 'car_wash_date'};

                case '3':
                    Requests.updateRequest(req.body.WaId, {when: 'In 1 hour'}, 'car_wash_requests')
                    return {current_step: 'car_amount', previous_step: 'car_wash_date'};

                default:
                    return false;

            } 

        case 'car_amount':
            switch (req.body.Body){

                case '1':
                    Requests.updateRequest(req.body.WaId, {car_amount: 'One car'}, 'car_wash_requests')
                    return {current_step: 'car_wash_type', previous_step: 'car_amount'};

                case '2':
                    Requests.updateRequest(req.body.WaId, {car_amount: 'Two cars'}, 'car_wash_requests')
                    return {current_step: 'car_wash_type', previous_step: 'car_amount'};

                case '3':
                    Requests.updateRequest(req.body.WaId, {car_amount: 'Three cars'}, 'car_wash_requests')
                    return {current_step: 'car_wash_type', previous_step: 'car_amount'};

                case '4':
                    Requests.updateRequest(req.body.WaId, {car_amount: 'Four cars'}, 'car_wash_requests')
                    return {current_step: 'car_wash_type', previous_step: 'car_amount'};

                case '5':
                    Requests.updateRequest(req.body.WaId, {car_amount: 'Five cars'}, 'car_wash_requests')
                    return {current_step: 'car_wash_type', previous_step: 'car_amount'};

                default:
                    return false;

            }

        case 'car_wash_type':
            switch (req.body.Body){

                case '1':
                    Requests.updateRequest(req.body.WaId, {wash_type: 'Outside only'}, 'car_wash_requests')
                    return {current_step: 'car_location', previous_step: 'car_wash_type'}
                case '2':
                    Requests.updateRequest(req.body.WaId, {wash_type: 'Inside and outside'}, 'car_wash_requests')
                    return {current_step: 'car_location', previous_step: 'car_wash_type'}
                default:
                    return false;
            }
            
        case 'car_location':

            if(req.body.Latitude && req.body.Longitude){
                Requests.updateRequest(req.body.WaId, {location: {long: req.body.Longitude, lat: req.body.Latitude}}, 'car_wash_requests')
                return {current_step: 'car_payment_type', previous_step: 'car_location'};
            }else{

                return false
            }
            
        case 'car_payment_type':
            
            switch (req.body.Body){

                case '1':
                    Requests.updateRequest(req.body.WaId, {payment_type: 'Online'}, 'car_wash_requests')
                    return {current_step: 'car_wash_payment_link', previous_step: 'car_payment_type'};
                    
                case '2':
                    Requests.updateRequest(req.body.WaId, {payment_type: 'Cash'}, 'car_wash_requests')
                    return {current_step: 'car_find_runner', previous_step: 'car_payment_type'};

                default:
                    return false;

            }

        case 'car_find_runner':
            console.log('FINDING RUNNER')
            

        case 'car_wash_payment_link':
            console.log('GENERATING PAYMENT LINK')
            
            

        /**
         * LAUNDRY========================================
        */
        case 'laundry_date':
            
            switch (req.body.Body){

                case '1':
                    Requests.updateRequest(req.body.WaId, {when: 'Now'}, 'laundry_requests')
                    return {current_step: 'laundry_amount', previous_step: 'laundry_date'};
                    
                case '2':
                    Requests.updateRequest(req.body.WaId, {when: 'In 30 minutes'}, 'laundry_requests')
                    return {current_step: 'laundry_amount', previous_step: 'laundry_date'};

                case '3':
                    Requests.updateRequest(req.body.WaId, {when: 'In 1 hour'}, 'laundry_requests')
                    return {current_step: 'laundry_amount', previous_step: 'laundry_date'};

                default:
                        return false;
            }
            
        case 'laundry_amount':
            
            switch (req.body.Body){

                case '1':
                    Requests.updateRequest(req.body.WaId, {baskets: 1}, 'laundry_requests')
                    return {current_step: 'laundry_type', previous_step: 'laundry_amount'};
                    
                case '2':
                    Requests.updateRequest(req.body.WaId, {baskets: 2}, 'laundry_requests')
                    return {current_step: 'laundry_type', previous_step: 'laundry_amount'};

                case '3':
                    Requests.updateRequest(req.body.WaId, {baskets: 3}, 'laundry_requests')
                    return {current_step: 'laundry_type', previous_step: 'laundry_amount'};

                case '4':
                    Requests.updateRequest(req.body.WaId, {baskets: 4}, 'laundry_requests')
                    return {current_step: 'laundry_type', previous_step: 'laundry_amount'};

                case '5':
                    Requests.updateRequest(req.body.WaId, {baskets: 5}, 'laundry_requests')
                    return {current_step: 'laundry_type', previous_step: 'laundry_amount'};

                default:
                    return false;
            }
            
        case 'laundry_type':
            
            switch (req.body.Body){

                case '1':
                    Requests.updateRequest(req.body.WaId, {type: 'Washing Only'}, 'laundry_requests')
                    return {current_step: 'laundry_location', previous_step: 'laundry_type'};
                    
                case '2':
                    Requests.updateRequest(req.body.WaId, {type: 'Washing And Ironing'}, 'laundry_requests')
                    return {current_step: 'laundry_location', previous_step: 'laundry_type'};

                default:
                    return false;
            }

            
        case 'laundry_location':

            if(req.body.Latitude && req.body.Longitude){
                Requests.updateRequest(req.body.WaId, {location: {long: req.body.Longitude, lat: req.body.Latitude}}, 'laundry_requests')
                return {current_step: 'laundry_payment_type', previous_step: 'laundry_location'};
            }else{

                return false
            }   

        case 'laundry_payment_type':

            switch (req.body.Body){

                case '1':
                    Requests.updateRequest(req.body.WaId, {payment_type: 'Online'}, 'laundry_requests')
                    return {current_step: 'laundry_find_runner', previous_step: 'laundry_payment_type'};
                    
                case '2':
                    Requests.updateRequest(req.body.WaId, {payment_type: 'Cash'}, 'laundry_requests')
                    return {current_step: 'laundry_find_runner', previous_step: 'laundry_payment_type'};

                default:
                    return false;
            }

        case 'car_find_runner':
            console.log('FINDING RUNNER')

        case 'landry_payment_link':
            console.log('GENERATING PAYMENT LINK')

        /**
        * CLEANING========================================
        */
            
        case 'cleaning_date':

            switch (req.body.Body){

                case '1':
                    
                Requests.updateRequest(req.body.WaId, {when: 'Now'}, 'cleaning_requests')
                    return {current_step: 'cleaning_hours', previous_step: 'cleaning_date'};
                    
                case '2':
                    Requests.updateRequest(req.body.WaId, {hours: 'In 30 minutes'}, 'cleaning_requests')
                    return {current_step: 'cleaning_hours', previous_step: 'cleaning_date'};

                case '3':
                    Requests.updateRequest(req.body.WaId, {when: 'In 1 hour'}, 'cleaning_requests')
                    return {current_step: 'cleaning_hours', previous_step: 'cleaning_date'};

            }

        case 'cleaning_hours':

            switch (req.body.Body){

                case '1':
                    Requests.updateRequest(req.body.WaId, {hours: 1}, 'cleaning_requests')
                    return {current_step: 'cleaning_location', previous_step: 'cleaning_hours'};
                    
                case '2':
                    Requests.updateRequest(req.body.WaId, {hours: 2}, 'cleaning_requests')
                    return {current_step: 'cleaning_location', previous_step: 'cleaning_hours'};

                case '3':
                    Requests.updateRequest(req.body.WaId, {hours: 3}, 'cleaning_requests')
                    return {current_step: 'cleaning_location', previous_step: 'cleaning_hours'};

                case '4':
                    Requests.updateRequest(req.body.WaId, {hours: 4}, 'cleaning_requests')
                    return {current_step: 'cleaning_location', previous_step: 'cleaning_hours'};

                case '5':
                    Requests.updateRequest(req.body.WaId, {hours: 5}, 'cleaning_requests')
                    return {current_step: 'cleaning_location', previous_step: 'cleaning_hours'};

            }

        case 'cleaning_location':

            if(req.body.Latitude && req.body.Longitude){
                Requests.updateRequest(req.body.WaId, {location: {long: req.body.Longitude, lat: req.body.Latitude}}, 'cleaning_requests')
                return {current_step: 'cleaning_payment_type', previous_step: 'cleaning_location'};
            }else{

                return false
            }
            
        case 'cleaning_payment_type':

            switch (req.body.Body){

                case '1':
                     Requests.updateRequest(req.body.WaId, {payment_type: 'Online'}, 'cleaning_requests')
                    return {current_step: 'cleaning_payment_link', previous_step: 'cleaning_payment_type'};
                    
                case '2':
                     Requests.updateRequest(req.body.WaId, {payment_type: 'Cash'}, 'cleaning_requests')
                    return {current_step: 'cleaning_find_runner', previous_step: 'cleaning_payment_type'};

                default:
                    return false;
            }
        
        case 'cleaning_find_runner':
        console.log('FINDING RUNNER')

        case 'cleaning_payment_link':
            console.log('GENERATING PAYMENT LINK')

    /**
    * GARDENING========================================
    */  
   case 'gardening_date':

    switch (req.body.Body){

        case '1':
            Requests.updateRequest(req.body.WaId, {when: 'Now'}, 'gardening_requests')
            return {current_step: 'gardening_yard_type', previous_step: 'gardening_date'};
            
        case '2':
            Requests.updateRequest(req.body.WaId, {when: 'In 30 minutes'}, 'gardening_requests')
            return {current_step: 'gardening_yard_type', previous_step: 'gardening_date'};

        case '3':
            Requests.updateRequest(req.body.WaId, {when: 'In 1 hour'}, 'gardening_requests')
            return {current_step: 'gardening_yard_type', previous_step: 'gardening_date'};

    }

   case 'gardening_yard_type':

    switch (req.body.Body){

        case '1':
            Requests.updateRequest(req.body.WaId, {yard_type: 'Township yard'}, 'gardening_requests')
            return {current_step: 'gardening_grass', previous_step: 'gardening_yard_type'};
            
        case '2':
            Requests.updateRequest(req.body.WaId, {yard_type: 'Surbub yard'}, 'gardening_requests')
            return {current_step: 'gardening_grass', previous_step: 'gardening_yard_type'};
    }

   case 'gardening_grass':

    switch (req.body.Body){

        case '1':
            Requests.updateRequest(req.body.WaId, {grass_cut: true}, 'gardening_requests')
            return {current_step: 'gardening_location', previous_step: 'gardening_grass'};
            
        case '2':
            Requests.updateRequest(req.body.WaId, {grass_cut: false}, 'gardening_requests')
            return {current_step: 'gardening_payment_type', previous_step: 'gardening_grass'};
    }

    case 'gardening_payment_type':

            switch (req.body.Body){

                case '1':
                     Requests.updateRequest(req.body.WaId, {payment_type: 'Online'}, 'gardening_requests')
                    return {current_step: 'gardening_payment_link', previous_step: 'gardening_payment_type'};
                    
                case '2':
                     Requests.updateRequest(req.body.WaId, {payment_type: 'Cash'}, 'gardening_requests')
                    return {current_step: 'gardening_find_runner', previous_step: 'gardening_payment_type'};

                default:
                    return false;
            }

    case 'gardening_location':

            if(req.body.Latitude && req.body.Longitude){
                Requests.updateRequest(req.body.WaId, {location: {long: req.body.Longitude, lat: req.body.Latitude}}, 'gardening_requests')
                return {current_step: 'gardening_payment_type', previous_step: 'gardening_location'};
            }else{

                return false
            }
    case 'gardening_find_runner':
        console.log('FINDING RUNNER')

    case 'gardening_payment_link':
        console.log('GENERATING PAYMENT LINK')

    /**
    * DELIVERY========================================
    */  
   case 'delivery_date':

    switch (req.body.Body){

        case '1':
            Requests.updateRequest(req.body.WaId, {when: 'Now'}, 'delivery_requests')
            return {current_step: 'delivery_need', previous_step: 'delivery_date'};
            
        case '2':
            Requests.updateRequest(req.body.WaId, {when: 'In 30 minutes'}, 'delivery_requests')
            return {current_step: 'delivery_need', previous_step: 'delivery_date'};

        case '3':
            Requests.updateRequest(req.body.WaId, {when: 'In 1 hour'}, 'delivery_requests')
            return {current_step: 'delivery_need', previous_step: 'delivery_date'};

    }
   case 'delivery_need':

    switch (req.body.Body){

        case '1':
            Requests.updateRequest(req.body.WaId, {needs: 'person'}, 'delivery_requests')
            return {current_step: 'delivery_pickup_location', previous_step: 'delivery_need'};
            
        case '2':
            Requests.updateRequest(req.body.WaId, {needs: 'private car'}, 'delivery_requests')
            return {current_step: 'delivery_pickup_location', previous_step: 'delivery_need'};

        case '3':
            Requests.updateRequest(req.body.WaId, {needs: 'normal bakkie'}, 'delivery_requests')
            return {current_step: 'delivery_pickup_location', previous_step: 'delivery_need'};
        case '4':
            Requests.updateRequest(req.body.WaId, {needs: 'big bakkie'}, 'delivery_requests')
            return {current_step: 'delivery_pickup_location', previous_step: 'delivery_need'};

    }

    case 'delivery_pickup_location':

            if(req.body.Latitude && req.body.Longitude){
                Requests.updateRequest(req.body.WaId, {location: {long: req.body.Longitude, lat: req.body.Latitude}}, 'delivery_requests')
                return {current_step: 'delivery_location', previous_step: 'delivery_pickup_location'};
            }else{

                return false
            }

    case 'delivery_location':

            if(req.body.Latitude && req.body.Longitude){
                Requests.updateRequest(req.body.WaId, {location: {long: req.body.Longitude, lat: req.body.Latitude}}, 'delivery_requests')
                return {current_step: 'delivery_payment_type', previous_step: 'delivery_location'};
            }else{

                return false
            }

    case 'delivery_payment_type':

        switch (req.body.Body){
    
            case '1':
                Requests.updateRequest(req.body.WaId, {payment_type: 'Online'}, 'delivery_requests')
                return {current_step: 'delivery_payment_link', previous_step: 'delivery_payment_type'};
                
            case '2':
                Requests.updateRequest(req.body.WaId, {payment_type: 'Cash'}, 'delivery_requests')
                return {current_step: 'delivery_find_runner', previous_step: 'delivery_payment_type'};
        }

    case 'delivery_find_runner':
        console.log('FINDING RUNNER')

    case 'delivery_payment_link':
        console.log('GENERATING PAYMENT LINK')

    default:
        
        return {};


    }

}

export default processReply;