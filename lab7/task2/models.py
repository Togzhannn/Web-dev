   class Animal:
    def __init__(self, name, age, species):
        self.name = name
        self.age = age
        self.species = species

    def make_sound(self):
        return "Some generic animal sound"

    def eat(self):
        return f"{self.name} is eating."

    def __str__(self):
        return f"{self.species}: {self.name}, {self.age} years old"


class Dog(Animal):
    def __init__(self, name, age, breed):
        super().__init__(name, age, "Dog")
        self.breed = breed

    def make_sound(self):
        return "Woof! Woof!"

    def fetch(self):
        return f"{self.name} is fetching the ball."


class Cat(Animal):
    def __init__(self, name, age, color):
        super().__init__(name, age, "Cat")
        self.color = color

    def make_sound(self):
        return "Meow..."

    def scratch(self):
        return f"{self.name} is scratching the sofa."