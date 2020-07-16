def fizzBuzz(nombre):

	if nombre % 15 == 0:
		return "fizzbuzz"
	elif nombre % 5 == 0:
		return "buzz"
	elif nombre % 3 == 0:
		return "fizz"
	else:
		return nombre


		