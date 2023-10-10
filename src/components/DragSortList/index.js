import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
export const DragSortList = ({ children, data, setData }) => {
    const [active, setActive] = useState(false);
    const [currentCard, setCurrentCard] = useState(null);
    const dragStartHandler = (e, item) => {
        setCurrentCard(item);
        e.target.classList.add("larger");
        const el = document.querySelector(`.draggable__item__${item.id}`);
        if (el.classList.contains("draggable"))
            el.classList.add("larger");
    };
    const dragOverHandler = (e, item) => {
        e.preventDefault();
        const el = document.querySelector(`.draggable__item__${item.id}`);
        if (el.classList.contains("draggable"))
            el.classList.add("border");
    };
    const dragEndHandler = (e, item) => {
        e.preventDefault();
        const el = document.querySelector(`.draggable__item__${item.id}`);
        if (el.classList.contains("draggable")) {
            el.classList.remove("border");
        }
    };
    const dropHandler = (e, card) => {
        e.preventDefault();
        setActive(false);
        const reorderedNewCard = { ...currentCard, order: card.order };
        setData([
            ...data.map(c => {
                if (currentCard.id === c.id)
                    return reorderedNewCard;
                if (currentCard.order > card.order) {
                    if (c.order >= card.order && c.order < currentCard.order)
                        return { ...c, order: c.order += 1 };
                }
                else if (currentCard.order < card.order) {
                    if (c.order <= card.order && c.order > currentCard.order)
                        return { ...c, order: c.order -= 1 };
                }
                return c;
            })
        ]);
        const el = document.querySelector(`.draggable__item__${card.id}`);
        const elements = document.querySelectorAll(".draggable");
        elements.forEach(el => {
            el.classList.remove("larger");
        });
        if (el.classList.contains("draggable")) {
            el.classList.remove("border");
        }
    };
    return (_jsx("div", { children: data.map((item, i) => _jsx("div", { className: `draggable mt-1 rounded-md draggable__item__${item.id}`, onDragStart: (e) => dragStartHandler(e, item), onDragLeave: e => dragEndHandler(e, item), onDragEnd: (e) => dragEndHandler(e, item), onDragOver: (e) => dragOverHandler(e, item), onDrop: (e) => dropHandler(e, item), draggable: active, children: children(item, setActive, active) }, item.id)) }));
};
