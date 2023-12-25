import React, { useState } from "react"; 
import { 
	View, 
	Text, 
	TextInput, 
	TouchableOpacity, 
	FlatList, 
	StyleSheet, 
} from "react-native"; 

const App = () => { 
	const [task, setTask] = useState(""); 
	const [tasks, setTasks] = useState([]); 
	const [editIndex, setEditIndex] = useState(-1); 

	const handleAddTask = () => { 
		if (task) { 
			if (editIndex !== -1) { 
				// Edit existing task 
				const updatedTasks = [...tasks]; 
				updatedTasks[editIndex] = task; 
				setTasks(updatedTasks); 
				setEditIndex(-1); 
			} else { 
				// Add new task 
				setTasks([...tasks, task]); 
			} 
			setTask(""); 
		} 
	}; 

	const handleEditTask = (index) => { 
		const taskToEdit = tasks[index]; 
		setTask(taskToEdit); 
		setEditIndex(index); 
	}; 

	const handleDeleteTask = (index) => { 
		const updatedTasks = [...tasks]; 
		updatedTasks.splice(index, 1); 
		setTasks(updatedTasks); 
	}; 

	const renderItem = ({ item, index }) => ( 
		<View style={styles.task}> 
			<Text 
				style={styles.itemList}>{item}</Text> 
			<View 
				style={styles.taskButtons}> 
				<TouchableOpacity 
					onPress={() => handleEditTask(index)}> 
					<Text 
						style={styles.editButton}>Edit</Text> 
				</TouchableOpacity> 
				<TouchableOpacity 
					onPress={() => handleDeleteTask(index)}> 
					<Text 
						style={styles.deleteButton}>Delete</Text> 
				</TouchableOpacity> 
			</View> 
		</View> 
	); 

	return ( 
		<View style={styles.container}>

          <Text style={styles.title}>ToDo App 📝</Text> 
          <TextInput 
            style={styles.input} 
            placeholder="Enter task"
            value={task} 
            onChangeText={(text) => setTask(text)} 
          /> 
          <TouchableOpacity 
            style={styles.addButton} 
            onPress={handleAddTask}> 
            <Text style={styles.addButtonText}> 
              {editIndex !== -1 ? "Update Task" : "Add Task"} 
            </Text> 
          </TouchableOpacity> 
          <FlatList 
            data={tasks} 
            renderItem={renderItem} 
            keyExtractor={(item, index) => index.toString()} 
          /> 
		</View> 
	); 
}; 

const styles = StyleSheet.create({ 
	container: { 
		flex: 1, 
		padding: 20, 
		marginTop: 0,
    backgroundColor:'#DAE0E2'
	}, 
	title: { 
		fontSize: 24, 
		fontWeight: "bold",
    marginVertical:60, 
		marginBottom: 40, 
	},   
	input: { 
		borderWidth: 3, 
		borderColor: "#ccc", 
		padding: 10, 
		marginBottom: 10, 
		borderRadius: 10, 
		fontSize: 18, 

	}, 
	addButton: { 
		backgroundColor: "green", 
		padding: 10, 
		borderRadius: 5, 
		marginBottom: 10, 
    elevation:100
	}, 
	addButtonText: { 
		color: "white", 
		fontWeight: "bold", 
		textAlign: "center", 
		fontSize: 18,
     
	}, 
	task: { 
		flexDirection: "row", 
		justifyContent: "space-between", 
		alignItems: "center", 
    textAlign:'center',
		marginBottom: 15, 
		fontSize: 18, 
    borderWidth:1,
    width:350,
    height:50,
    borderRadius:10,
    backgroundColor:'white',
    borderColor: "#ccc"

    
	}, 
	itemList: { 
		fontSize: 19, 
	}, 
	taskButtons: { 
		flexDirection: "row", 
	}, 
	editButton: { 
		marginRight: 10, 
		color: '#fff', 
		fontWeight: "bold", 
		fontSize: 18,
    borderWidth:1,
    borderRadius:10,
    width:56 ,
    textAlign:'center', 
    backgroundColor:'green'
	}, 
	deleteButton: { 
		color: "white", 
		fontWeight: "bold", 
		fontSize: 18,
    borderWidth:1, 
    borderRadius:10,
    width:70,
    textAlign:'center',
    backgroundColor:'red',
    marginHorizontal:10
    
	}, 
}); 

export default App;
