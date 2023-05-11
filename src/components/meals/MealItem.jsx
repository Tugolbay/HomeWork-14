import React, { useContext } from "react";
import { styled } from "styled-components";
import { MealItemForm } from "./MealItemForm";
import { cartContext } from "../../store/cart-context";

export const MealItem = ({ meal }) => {
  const context = useContext(cartContext);
  function addItem(amount) {
    const data = {
      title: meal.title,
      description: meal.description,
      price: meal.price,
      amount: +amount,
      id: meal.id,
    };
    context.addItem(data);
  }
  return (
    <Container>
      <StyledMealItem>
        <h4>{meal.title}</h4>
        <p>{meal.description}</p>
        <span>${meal.price}</span>
      </StyledMealItem>
      <section>
        <MealItemForm onAdd={addItem} inputId={meal.id} />
      </section>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  border-bottom: 2px solid #d6d6d6;
  justify-content: space-between;
  padding-top: 24px;
`;

const StyledMealItem = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 20px;
  h4 {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #222222;
  }
  span {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #ad5502;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #222222;
  }
`;
