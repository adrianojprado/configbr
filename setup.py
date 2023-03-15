from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in configbr/__init__.py
from configbr import __version__ as version

setup(
	name="configbr",
	version=version,
	description="Configuracao Brasil",
	author="Adriano",
	author_email="adrianojprado@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
