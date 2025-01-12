import numpy as np


class QLearning:
    def __init__(self, state_space, action_space, alpha=0.1, gamma=0.9, epsilon=0.2, episodes=1000):
        self.state_space = state_space  # State space as a tuple of dimensions (e.g., (5, 5, 5, 5, 5, 5, 5, 5))
        self.action_space = action_space  # List of possible actions (e.g., ['improve_sleep', 'improve_diet'])
        self.alpha = alpha  # Learning rate
        self.gamma = gamma  # Discount factor
        self.epsilon = epsilon  # Exploration rate
        self.episodes = episodes  # Number of episodes to train

        # Initialize the Q-table as a zero matrix with state space dimensions and number of actions
        self.q_table = np.zeros(state_space + (len(action_space),))

    def get_reward(self, state, action):
        """
        Define the reward logic based on the state and action.
        You can modify this method based on your specific use case.
        """
        # Example reward function
        mood_idx, energy_idx, sleep_quality_idx, diet_idx, exercise_idx, anxiety_idx, stress_idx, sleep_hours = state
        if action == 'improve_sleep':
            # Dummy reward logic for 'improve_sleep' action
            if sleep_quality_idx == 0:  # Very low sleep quality
                return 15
            elif sleep_quality_idx == 1:  # Low sleep quality
                return 10
            else:
                return 5
        # Add more actions with their respective reward logic
        return 0

    def train(self):
        """
        Train the Q-learning agent.
        """
        for episode in range(self.episodes):
            # Random initial state within the bounds of state space
            current_state = tuple(np.random.choice(dim) for dim in self.state_space)

            # Exploration vs. Exploitation
            if np.random.uniform(0, 1) < self.epsilon:
                action_idx = np.random.choice(len(self.action_space))  # Explore
            else:
                action_idx = np.argmax(self.q_table[current_state])  # Exploit

            action = self.action_space[action_idx]
            reward = self.get_reward(current_state, action)

            # Simulate the next state (this should be based on the action and state transition in real-world applications)
            next_state = tuple(np.random.choice(dim) for dim in self.state_space)

            # Q-value Update (Q-learning update rule)
            self.q_table[current_state][action_idx] = self.q_table[current_state][action_idx] + self.alpha * (
                    reward + self.gamma * np.max(self.q_table[next_state]) - self.q_table[current_state][action_idx]
            )

    def recommend_action(self, current_state):
        """
        Recommend an action based on the current state by selecting the action with the highest Q-value.
        """
        # Debug print statement to check current_state
        print("Current State:", current_state)

        # Check if current_state indices are valid
        if not all(0 <= idx < dim for idx, dim in zip(current_state, self.state_space)):
            raise IndexError("Current state indices out of bounds")

        action_idx = np.argmax(self.q_table[current_state])  # Assuming valid current_state
        return self.action_space[action_idx]

    def generate_human_response(self, action, current_state):
        """
        Generate a human-like response based on the action selected and the current state.
        You can customize this method based on the action.
        """
        mood_idx, energy_idx, sleep_quality_idx, diet_idx, exercise_idx, anxiety_idx, stress_idx, sleep_hours = current_state
        sleep_quality_desc = ['very low', 'low', 'neutral', 'good', 'great'][sleep_quality_idx]
        if action == 'improve_sleep':
            if sleep_quality_desc == 'very low':
                return "It looks like your sleep quality is really poor today. We should focus on improving your sleep environment and relaxing before bedtime."
            elif sleep_quality_desc == 'low':
                return "Your sleep quality is a bit low. Let's try improving your bedtime routine to get a better rest tonight."
        return "Keep up the great work on improving your well-being!"