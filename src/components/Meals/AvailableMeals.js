import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
    const [mealsList, setMealsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('https://react-food-delivery-app-71444-default-rtdb.firebaseio.com/meals.json');
            
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            
            const responseData = await response.json(); 

            const loadedMeals = [];

            for (const key in responseData) {   // if using 'of' instesd of 'in': error!
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price
                });
            };

            setMealsList(loadedMeals);
            setIsLoading(false);
        };

        // the traditional way of handling error inside of promise 
        // instead of try{} catch{}
        fetchMeals().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });

    }, []);

    if (isLoading) {
        return (
            <section className={classes.meals}>
                <p>Loading...</p>
            </section>
        );
    }

    if (httpError) {    // this means httpError has error.message from Error('Something went wrong!')
        return (
            <section className={classes.meals}>
                <p>{httpError}</p>
            </section>
        );
    }

    const MealsList = mealsList.map(
        meal => <MealItem id={meal.id}
                          key={meal.id}
                          name={meal.name}
                          description={meal.description}
                          price={meal.price} />
    );

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{MealsList}</ul>
            </Card>
        </section>
    )
}

export default AvailableMeals;