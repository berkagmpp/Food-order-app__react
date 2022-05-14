import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
    const [mealsList, setMealsList] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('https://react-food-delivery-app-71444-default-rtdb.firebaseio.com/meals.json');
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
        };

        fetchMeals();

    }, []);

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