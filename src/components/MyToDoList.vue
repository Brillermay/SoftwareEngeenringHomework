<template>
    <div class="container">
      <h1 class="title">📋 To-Do List</h1>
      <div class="input-container">
        <input v-model="newTask" @keyup.enter="addTask" placeholder="输入任务..." />  
         <!-- @keyup.enter="addTask"：监听 回车键 (Enter)，按下回车时执行 addTask() 方法 添加任务。 -->
        <button @click="addTask">添加</button>
      </div>
      <ul class="task-list">
        <p>待完成的任务</p>
        <li v-for="(task, index) in tasks" :key="index" class="task-item">
            <span>{{ task }}</span>
          <button @click="removeTask(index)">❌</button>
        </li>
      </ul>

      <ul class="task-list">
        <p>已完成的任务</p>
        <li v-for="(finishedTask, index) in finishedTasks" :key="index" class="task-item">
          <span>{{ finishedTask }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const newTask = ref('');
  const tasks = ref([]);
const finishedTasks = ref([]);

  
  const addTask = () => {
    if (newTask.value.trim()) {              //检查用户是否输入了非空内容（trim() 去除空格）。
      tasks.value.push(newTask.value.trim());
      newTask.value = '';
    }
  };
  
  const removeTask = (index) => { 
    finishedTasks.value.push(tasks.value[index]);   //接收任务的索引 index（任务在 tasks 数组中的位置）
    tasks.value.splice(index, 1);    //使用 splice() 方法从 tasks 数组中删除该任务。
    
  };

  </script>
  


  <style scoped>

.title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 10px;
  font-style: italic;
  background-color: antiquewhite;
  border-radius: 5px;
}

.input-container {
  display: flex;
  justify-content: center; /* 将输入框和按钮居中 */
  gap: 10px; /* 设置输入框和按钮之间的间距 */
  padding: 10px;
  border-bottom: 1px solid #ccc; /* 添加底部边框 */
  background-color: antiquewhite;
  border-radius: 5px;
}

.task-list {
  list-style:square;  /* 设置任务列表的样式*/
  padding: 5px;
}

.task-item {
  display: flex;
  justify-content: space-between; /* 将任务项左右对齐 */
  background: #f4f4f4;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
}

.task-item button {
  background: rgb(4, 255, 0);
  color: rgba(255, 255, 255, 0.848);
  border: none;
  padding: 5px;
  cursor: pointer;
}

.task-list p {
  font-weight: bold;
  margin-bottom: 5px;
    font-size: 13px;
    padding:3px;
    background-color: wheat;
    text-align: center;
    border-bottom: 1px solid #ccc; /* 添加底部边框 */
    width: 100%;
    border-radius: 5px;
}

  </style>
  