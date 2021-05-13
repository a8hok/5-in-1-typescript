import React from 'react';

type Todo = {
    task: string,
    complete: boolean
};

const TodoItems:Todo[] = [
    {
        task:  'Clean rooms',
        complete: false
    },
    {
        task:  'Buy veggies',
        complete: false
    },
];

export const TodoList:React.FC = () => {
    return (
        <>
            <div>{TodoItems[0].task}</div>
            <div>{TodoItems[1].task}</div>
        </>
    )
};
