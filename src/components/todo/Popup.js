import { v4 as uuid } from 'uuid';
import { useCallback, useEffect, useState } from "react";
import { DatePicker, Input, Checkbox } from "antd";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, changeStatus } from "../../store/todoSlice";

export const Popup = () => {
    const dispatch = useDispatch();
    const [date, setDate] = useState(moment().startOf('day').format());
    const [toDoInput, setToDoInput] = useState('');

    const { todos } = useSelector(state => state.toDo);

    const onPressEnter = (e) => {
        const uniqueId = uuid();
        const smallId = uniqueId.slice(0, 8)
        dispatch(addTodo({ id: smallId, title: e.target.value, timeStamp: moment(date).startOf('day').format(), isCompleted: false }));
        setToDoInput('')
    }

    const onChange = (date, dateString) => {
        setDate(moment(dateString).startOf('day').format());
    }

    const getFilteredTodos = useCallback(() => {
        return todos.filter(item => item.timeStamp === date);
    }, [date, todos]);

    const handleInput = (e) => {
        setToDoInput(e.target.value);
    }

    const handleCheckbox = (id, e) => {
        dispatch(changeStatus({ id, isCompleted: e.target.checked }))
    }

    return (
        <div>
            <DatePicker onChange={onChange} />
            <div className="listContainer" style={{ minHeight: "150px", display: "flex", flexDirection: 'column', margin: "1rem 0" }}>
                {getFilteredTodos().map((item, index) => {
                    return (
                        <Checkbox
                            key={index}
                            style={item.isCompleted ? { textDecoration: 'line-through' } : {}}
                            checked={item.isCompleted}
                            onChange={(e) => {
                                handleCheckbox(item.id, e)
                            }}
                        >
                            {item.title}
                        </Checkbox>
                    )
                })}
            </div>
            <Input placeholder="New ToDo" onPressEnter={onPressEnter} value={toDoInput} onChange={handleInput} />
        </div>
    )
}
