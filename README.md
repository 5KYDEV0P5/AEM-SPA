# AEM - Single Page Application : React

[![License](https://img.shields.io/badge/License-Apache%202.0-brightgreen.svg)](https://opensource.org/licenses/Apache-2.0)
[![Build Status](https://travis-ci.org/5KYDEV0P5/skydevops-mysql.svg?branch=master)](https://travis-ci.org/5KYDEV0P5/skydevops-mysql)

## Description

Building single page application using AEM and ReactJS

## Requirements
- Node 	>= 	10.x.x
- NPM 	>=	6.4.x
- Java 	>=	1.8.0_161
- Maven >=	3.5.x

## AEM - Multi Module Project Setup


## Maven Settings File - Adobe Public Repository
All the variable that can be overridden are stored in [vars/main.yml](vars/main.yml) or [defaults/main.yml](defaults/main.yml) file as shown in the table below:

| Name                                    | Default Value   | Description                               |
|---------------------------------------- |---------------- |-----------------------------------------  |
| `mysql_user_home`                       | /root           | Default User directory                    |


## Integrating ReactJS with AEM


## Dependencies

- clientlib-generator

## Example Code samples

### Clientlib-generator sample

```yaml
- hosts: all
  become: yes
  gather_facts: yes
  roles:
    - role: 5KYDEV0P5.common

- hosts: testservers
  become: yes
  gather_facts: yes
  roles:
    - role: 5KYDEV0P5.skydevops-mysql
```

## License

- Licensed under the Apache License V2.0. 
- See the [LICENSE file](LICENSE) for details.

## Author Information

- You can find me on Twitter: [@skydevops](https://twitter.com/skydevops)
- You can find me on Facebook: [@skydevops](https://www.facebook.com/skydevops)

## Contributors

- Shashi Yebbare ([@skydevops](https://twitter.com/skydevops))