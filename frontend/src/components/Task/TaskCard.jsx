import styles from './TaskCard.module.css';

export const TaskCard = ({ task, onDelete }) => {
  return (
    <div className={styles.card}>
      <h3>{task.title}</h3>
      <p>Status: {task.completed ? '✅ Concluída' : '🟡 Pendente'}</p>
      <button onClick={() => onDelete(task.id)}>Remover</button>
    </div>
  );
};