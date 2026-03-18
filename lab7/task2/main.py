from models import Dog, Cat


def main():
    animals = [
        Dog("Rex", 3, "Golden Retriever"),
        Cat("Whiskers", 2, "White")
    ]

    for animal in animals:
        print(animal)
        print(animal.make_sound())
        print(animal.eat())

        if isinstance(animal, Dog):
            print(animal.fetch())
        elif isinstance(animal, Cat):
            print(animal.scratch())

        print("-" * 20)


if __name__ == "__main__":
    main()