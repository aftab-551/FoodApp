import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: '1',
    name: 'biryani',
    price: 10.50,
  },
  {
    id: '2',
    name: 'roll',
    price: 6.5,
  },
  {
    id: '3',
    name: 'qabuli',
    price: 13.00,
  },
  {
    id: '4',
    name: 'Soup',
    price: 8.60,
  },
];

const AvailableMeals = () => {

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{DUMMY_MEALS.map((meal) => 
          (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
