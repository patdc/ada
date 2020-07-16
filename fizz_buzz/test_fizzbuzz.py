from fizzbuzz import *
import unittest

class testFizzBuzz(unittest.TestCase):
	def test1_retourne1(self):
		self.assertEqual(1, fizzBuzz(1))

	def test2_retourne2(self):
		self.assertEqual(2, fizzBuzz(2))

	def test3_retournefizz(self):
		self.assertEqual("fizz", fizzBuzz(3))

	def test5_retournebuzz(self):
		self.assertEqual("buzz", fizzBuzz(5))
	
	def test15_retournefizzbuzz(self):
		self.assertEqual("fizzbuzz", fizzBuzz(15))

	def test6_retournefizz(self):
		self.assertEqual("fizz", fizzBuzz(6))
		
	def test7_retourne7(self):
		self.assertEqual(7, fizzBuzz(7))

	def test141_retournefizz(self):
		self.assertEqual("fizz", fizzBuzz(141))
		
	def test30_retournefizzbuzz(self):
		self.assertEqual("fizzbuzz", fizzBuzz(30))
		
	def test1103_retourne1103(self):
		self.assertEqual(1103, fizzBuzz(1103))
		
unittest.main()

