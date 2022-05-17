# anikutusu-expressjs

I created this repo concurrently with my udemy course, it's not entirely mine  

| METHOD 	| URI                	| OPERATION 	| REQUEST BODY                         	| DESCRIPTION      	|
|--------	    |--------------------  	|-----------	    |--------------------------------------	|------------------	|
| GET       	| /memories/          	| READ           	| None                                 	            | Get all memories 	|
| POST     	| /memories/             	| CREATE      	| JSON: title(string), content(string) | Create a memory  	|
| GET       	| /memories/**{id}**  | READ          	| None                                 	            | Get a memory      	|
| PUT       	| /memories/**{id}**  | UPDATE      | JSON: title(string), content(string)  | Update a memory  	|
| DELETE 	| /memories/**{id}** 	| DELETE    	| None                                 	             | Delete a memory  	|

Create an ***.env*** file on root directory such as:

    SERVER_PORT = 5000
    DATABASE_URI = mongodb+srv://{USER}:{PASSWORD}@{HOST}/{COLLECTION}?retryWrites=true&w=majority
