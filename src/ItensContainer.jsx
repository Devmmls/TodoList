import taskItem from "./TaskItem";

const itensContainer = ({ taskList, removeFromList }) => {
  /*   const taskList = props.taskList; */
  /*  const { taskList } = props; - SÃO A MESMA COISA*/
  return (
    <div className="items-container">
      <p>
        {taskList.map((t, idx) => (
          <taskItem
            task={t}
            removeFromList={removeFromList}
            key={`task-item-${idx}`}
          />
        ))}
      </p>
    </div>
  );
};

export default itensContainer;
