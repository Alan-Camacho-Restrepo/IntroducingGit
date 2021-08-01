def generaPares(n):

	num = 0
	L = []
	while num<n:
		L.append(num*2)
		num+=1

	return L

print(generaPares(10))


def Gene(l):
	i=1
	while i<l:
		yield i*2
		i+=1

Obj = Gene(10)

# print(next(Obj))
# print(next(Obj))
# print(next(Obj))

'''Comentario para agregar un nuevo commit en Github'''
