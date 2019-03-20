Feature: User can sign in to amazon account 

Scenario Outline: User can sign into amazon using valid username and password 
	Given I am at amazon homepage 
	When I am clicking "<click>" 
	Then I am entering "<email>" "<evalue>" 
	And I am clicking "<continue>" 
	Then I am entering "<pass>" "<pvalue>" 
	And I am clicking "<signin>" 
	Then I take screenshot "<screenshot>" 
	
	Examples: 
		|click    |email     |evalue             |continue     |pass         |pvalue          |signin      |screenshot           |
		|clickSign|enterEmail|mazmi3091@gmail.com|clickContinue|enterPassword|peoplentech123!!|signinButton|Amazon_valid_e_and_p |
		
		
Scenario Outline: User cannot sign into amazon using valid username and invalid password 
	Given I am at amazon homepage 
	When I am clicking "<click>" 
	Then I am entering "<email>" "<evalue>" 
	And I am clicking "<continue>" 
	Then I am entering "<pass>" "<pvalue>" 
	And I am clicking "<signin>" 
	Then I take screenshot "<screenshot>" 
	
	Examples: 
		|click    |email     |evalue             |continue     |pass         |pvalue     |signin      |screenshot     |
		|clickSign|enterEmail|mazmi3091@gmail.com|clickContinue|enterPassword|peoplentech|signinButton|Amazon_valid_e |
		
		
Scenario Outline: User cannot sign into amazon using invalid username and valid password 
	Given I am at amazon homepage 
	When I am clicking "<click>" 
	Then I am entering "<email>" "<evalue>" 
	And I am clicking "<continue>" 
	Then I am entering "<pass>" "<pvalue>" 
	And I am clicking "<signin>" 
	Then I take screenshot "<screenshot>" 
	
	Examples: 
		|click    |email     |evalue          |continue     |pass         |pvalue          |signin      |screenshot     |
		|clickSign|enterEmail|nomail@gmail.com|clickContinue|enterPassword|peoplentech123!!|signinButton|Amazon_valid_p |
		
		
Scenario Outline: User cannot sign into amazon using invalid username and invalid password 
	Given I am at amazon homepage 
	When I am clicking "<click>" 
	Then I am entering "<email>" "<evalue>" 
	And I am clicking "<continue>" 
	Then I am entering "<pass>" "<pvalue>" 
	And I am clicking "<signin>" 
	Then I take screenshot "<screenshot>" 
	
	Examples: 
		|click    |email     |evalue          |continue     |pass         |pvalue           |signin      |screenshot            |
		|clickSign|enterEmail|nomail@gmail.com|clickContinue|enterPassword|peoplentech      |signinButton|Amazon_invalid_e_and_p|
		|clickSign|enterEmail|nomail@yahoo.com|clickContinue|enterPassword|peoplentech123321|signinButton|Amazon_invalid_e_and_p|
		
		
Scenario Outline: User cannot sign into amazon using only email
	Given I am at amazon homepage 
	When I am clicking "<click>" 
	Then I am entering "<email>" "<evalue>" 
	And I am clicking "<continue>" 
	Then I am clicking "<signin>" 
	Then I take screenshot "<screenshot>" 
	
	Examples: 
		|click    |email     |evalue          |continue     |signin      |screenshot    |
		|clickSign|enterEmail|nomail@gmail.com|clickContinue|signinButton|Amazon_only_e |