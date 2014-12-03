bhsclient_path = /home/bhs/client/bhsclient

all: test-user backup pull install build copy clean

test-user:
	runner=`whoami` ; \
	if test $$runner != "bhs"; then \
		exit 1; \
	fi

backup:
	if [ -d $(bhsclient_path)/../public ];then \
		cd $(bhsclient_path)/../ && mv public build-`date +%d.%m.%y-%H:%M:%S`; \
	fi

pull:
	cd $(bhsclient_path) && git pull origin master

install:
	npm install && bower install

build: Gruntfile.js
	cd $(bhsclient_path) && grunt build

copy: 
	cd $(bhsclient_path)/../ && cp -r $(bhsclient_path)/public public

clean: 
	rm -r $(bhsclient_path)/public  
