import React, { useContext } from "react";
import { Modal } from "../UI/Modal";
import { BasketItem } from "./BasketItem";
import { TotalAmount } from "./TotalAmount";
import { styled } from "styled-components";
import { cartContext } from "../../store/cart-context";

export const Basket = ({ onToggle }) => {
  const context = useContext(cartContext);
  return (
    <Modal>
      {context.items.length ? (
        <FixedWidthContainer>
          {context.items?.map((item) => (
            <BasketItem
              title={item.title}
              price={item.price}
              amount={item.amount}
              id={item.id}
            />
          ))}
        </FixedWidthContainer>
      ) : null}
      <TotalAmount onClose={onToggle} totalPrice={context.totalPrice} />
    </Modal>
  );
};

const FixedWidthContainer = styled.div`
  max-height: 260px;
  overflow-y: scroll;
`;
