FROM maven:3.6.3-jdk-11-openj9
COPY . /usr/src/myapp
WORKDIR /usr/src/myapp
RUN mvn clean package
EXPOSE 8080
CMD ["java", "-jar", "target/rutt-0.0.1-SNAPSHOT.jar"]