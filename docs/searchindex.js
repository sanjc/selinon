Search.setIndex({envversion:50,filenames:["api/modules","api/selinon","api/selinon.config","api/selinon.dispatcher","api/selinon.fatalTaskError","api/selinon.flowError","api/selinon.lockPool","api/selinon.selinonTask","api/selinon.selinonTaskEnvelope","api/selinon.storage","api/selinon.storage.dataStorage","api/selinon.storage.mongoStorage","api/selinon.storage.redisStorage","api/selinon.storage.sqlStorage","api/selinon.storagePool","api/selinon.systemState","api/selinon.trace","api/selinon.version","index","patterns","start","storage","tasks","trace","yaml.conf"],objects:{"":{selinon:[1,0,0,"-"]},"selinon.config":{Config:[2,1,1,""]},"selinon.config.Config":{celery_app:[2,2,1,""],dispatcher_queue:[2,2,1,""],edge_table:[2,2,1,""],failures:[2,2,1,""],get_task_instance:[2,2,1,""],is_flow:[2,2,1,""],max_retry:[2,2,1,""],nowait_nodes:[2,2,1,""],output_schemas:[2,2,1,""],propagate_compound_finished:[2,2,1,""],propagate_compound_parent:[2,2,1,""],propagate_finished:[2,2,1,""],propagate_node_args:[2,2,1,""],propagate_parent:[2,2,1,""],retry_countdown:[2,2,1,""],set_celery_app:[2,3,1,""],set_config_py:[2,3,1,""],set_config_yaml:[2,3,1,""],storage_mapping:[2,2,1,""],strategy_function:[2,2,1,""],task_mapping:[2,2,1,""],task_queues:[2,2,1,""],trace_by_func:[2,3,1,""],trace_by_logging:[2,3,1,""]},"selinon.dispatcher":{Dispatcher:[3,1,1,""]},"selinon.dispatcher.Dispatcher":{acks_late:[3,2,1,""],ignore_result:[3,2,1,""],max_retries:[3,2,1,""],name:[3,2,1,""],run:[3,4,1,""],track_started:[3,2,1,""]},"selinon.fatalTaskError":{FatalTaskError:[4,5,1,""]},"selinon.flowError":{FlowError:[5,5,1,""]},"selinon.lockPool":{LockPool:[6,1,1,""]},"selinon.lockPool.LockPool":{get_lock:[6,3,1,""]},"selinon.selinonTask":{SelinonTask:[7,1,1,""]},"selinon.selinonTask.SelinonTask":{finished_task_result:[7,4,1,""],parent_flow_result:[7,4,1,""],parent_task_result:[7,4,1,""],run:[7,4,1,""],storage:[7,2,1,""]},"selinon.selinonTaskEnvelope":{SelinonTaskEnvelope:[8,1,1,""]},"selinon.selinonTaskEnvelope.SelinonTaskEnvelope":{acks_late:[8,2,1,""],ignore_result:[8,2,1,""],max_retries:[8,2,1,""],name:[8,2,1,""],run:[8,4,1,""],track_started:[8,2,1,""],validate_result:[8,3,1,""]},"selinon.storage":{dataStorage:[10,0,0,"-"],mongoStorage:[11,0,0,"-"],redisStorage:[12,0,0,"-"],sqlStorage:[13,0,0,"-"]},"selinon.storage.dataStorage":{DataStorage:[10,1,1,""]},"selinon.storage.dataStorage.DataStorage":{connect:[10,4,1,""],disconnect:[10,4,1,""],is_connected:[10,4,1,""],retrieve:[10,4,1,""],store:[10,4,1,""]},"selinon.storage.mongoStorage":{MongoStorage:[11,1,1,""]},"selinon.storage.mongoStorage.MongoStorage":{connect:[11,4,1,""],disconnect:[11,4,1,""],is_connected:[11,4,1,""],retrieve:[11,4,1,""],store:[11,4,1,""]},"selinon.storage.redisStorage":{RedisStorage:[12,1,1,""]},"selinon.storage.redisStorage.RedisStorage":{connect:[12,4,1,""],disconnect:[12,4,1,""],is_connected:[12,4,1,""],retrieve:[12,4,1,""],store:[12,4,1,""]},"selinon.storage.sqlStorage":{Result:[13,1,1,""],SqlStorage:[13,1,1,""]},"selinon.storage.sqlStorage.Result":{flow_name:[13,2,1,""],id:[13,2,1,""],node_args:[13,2,1,""],result:[13,2,1,""],task_id:[13,2,1,""],task_name:[13,2,1,""]},"selinon.storage.sqlStorage.SqlStorage":{connect:[13,4,1,""],disconnect:[13,4,1,""],is_connected:[13,4,1,""],retrieve:[13,4,1,""],store:[13,4,1,""]},"selinon.storagePool":{StoragePool:[14,1,1,""]},"selinon.storagePool.StoragePool":{get:[14,4,1,""],get_connected_storage:[14,3,1,""],get_storage_by_task_name:[14,3,1,""],get_storage_name_by_task_name:[14,3,1,""],retrieve:[14,3,1,""],set:[14,3,1,""]},"selinon.systemState":{SystemState:[15,1,1,""]},"selinon.systemState.SystemState":{node_args:[15,2,1,""],to_dict:[15,4,1,""],update:[15,4,1,""]},"selinon.trace":{Trace:[16,1,1,""]},"selinon.trace.Trace":{DISPATCHER_FAILURE:[16,2,1,""],DISPATCHER_RETRY:[16,2,1,""],DISPATCHER_WAKEUP:[16,2,1,""],FALLBACK_START:[16,2,1,""],FLOW_END:[16,2,1,""],FLOW_FAILURE:[16,2,1,""],FLOW_START:[16,2,1,""],NODE_FAILURE:[16,2,1,""],NODE_SUCCESSFUL:[16,2,1,""],STORAGE_CONNECT:[16,2,1,""],STORAGE_DISCONNECT:[16,2,1,""],STORAGE_RETRIEVE:[16,2,1,""],STORAGE_STORE:[16,2,1,""],SUBFLOW_SCHEDULE:[16,2,1,""],TASK_DISCARD_RESULT:[16,2,1,""],TASK_END:[16,2,1,""],TASK_FAILURE:[16,2,1,""],TASK_RETRY:[16,2,1,""],TASK_SCHEDULE:[16,2,1,""],TASK_START:[16,2,1,""],event2str:[16,3,1,""],log:[16,3,1,""],logging_trace_func:[16,3,1,""],trace_by_func:[16,3,1,""],trace_by_logging:[16,3,1,""]},selinon:{config:[2,0,0,"-"],dispatcher:[3,0,0,"-"],fatalTaskError:[4,0,0,"-"],flowError:[5,0,0,"-"],lockPool:[6,0,0,"-"],selinonTask:[7,0,0,"-"],selinonTaskEnvelope:[8,0,0,"-"],storage:[9,0,0,"-"],storagePool:[14,0,0,"-"],systemState:[15,0,0,"-"],trace:[16,0,0,"-"],version:[17,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","classmethod","Python class method"],"4":["py","method","Python method"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:classmethod","4":"py:method","5":"py:exception"},terms:{"abstract":10,"boolean":24,"case":[3,22,24],"class":[2,3,6,7,8,10,11,12,13,14,15,16,21,22,24],"default":24,"float":24,"function":[2,16,23],"import":[21,22,23,24],"new":[6,15,18],"return":[6,7,8,10,14,15,16,21,22,24],"short":24,"true":[3,8,10,24],"try":[21,24],__init__:21,abov:24,accept:24,acks_lat:[3,8],acquir:6,across:[21,24],action:[2,15,16,18],activ:24,adapt:[10,21,24],adapter:11,addit:16,advantag:18,after:19,against:22,aggreg:19,airflow:18,all:[2,14],alreadi:[6,21,23],alwai:[6,24],alwaystru:24,ani:24,anoth:[19,24],anothertask:24,any:22,apach:18,api:13,app:[2,3,8],appetit:18,appli:24,applic:2,arg:[10,22,24],argument:[3,7,10,14,15,16,21,22,24],ari:24,automat:[18,24],azkaban:18,bar:24,base:[2,3,4,5,6,7,8,10,11,12,13,14,15,16,18,19,21,22,24],basic:18,baz:24,becaus:7,becom:24,befor:[19,24],bellow:19,between:24,bigger:21,black:21,box:21,build:24,call:[19,22,24],can:[6,7,14,15,16,18,19,21,22,23,24],cannot:24,care:18,carri:14,caus:24,celeri:[2,3,8],celery_app:2,charset:[12,21],check:[15,18,22,24],choos:24,chosen:24,circuit:24,classmethod:[2,6,8,14,16],classnam:[21,24],code:[2,18,24],collection_nam:[11,21],combin:24,come:[18,21,24],complet:24,complex:24,compos:18,comput:[7,14,19,22,24],concurr:21,condit:[18,24],config:[0,1],config_cod:2,config_pi:2,configur:[2,7,14,18,19,21,22],connect:[10,11,12,13,14,21],connection_pool:12,connection_str:[13,21,24],consid:19,consist:[22,24],constructor:[21,22],contain:22,content:0,context:14,convert:15,correspond:24,count:15,countdown:3,creat:[18,24],current:[3,14,15,21],custom:[16,21,24],data:[14,22],databas:[7,11,14,19,21,22,24],database_nam:21,datastorag:[1,9],db_name:[11,21],declar:13,deep:18,def:[21,22,23],defer:24,defin:[7,8,18,19,21,22,23,24],definit:[2,19,24],depend:[18,24],describ:24,design:24,desir:[14,24],detail:24,dict:[15,16,24],dictionari:[19,22,24],differ:24,disabl:24,disconnect:[10,11,12,13,21],dispatch:[0,1,2],dispatcher_failure:16,dispatcher_id:15,dispatcher_queu:2,dispatcher_retry:16,dispatcher_wakeup:16,distribut:18,dive:18,docker:18,done:[15,23],each:[3,18,21,24],easier:19,echo:[13,21,24],edg:24,edge:24,edge_t:2,effici:21,either:24,empti:10,enabl:24,encapsul:19,encod:[13,21],entri:3,entrypoint:7,error:[4,5,12,24],etc:24,evalu:24,even:24,event2str:16,event:[16,23],exampl:[18,19,21,23,24],except:[4,5,14,24],exception:[4,5],exclus:6,execut:[10,18,19,22],exist:18,expect:[19,24],ext:13,extend:18,extern:24,facil:16,fact:18,fail:[23,24],failur:2,fallback:[3,19,24],fallback_start:16,fallbacktask:24,fals:[3,8,13,14,21,24],fatal:[4,24],fataltaskerror:[0,1],fieldequal:24,file:[2,18,21,23,24],finish:[3,7,8,15,19,24],finished_nam:7,finished_task_result:7,first:19,flag:24,flow1:19,flow:[2,3,5,7,8,10,14,16],flow_definition_fil:2,flow_end:16,flow_failure:[16,23],flow_nam:[3,7,8,10,11,12,13,14,15,21,23],flow_start:16,flowerror:[0,1,3],follow:[19,24],foo:24,forth:19,found:24,from:[2,7,8,10,14,19,21,22,23,24],fulli:[18,24],func:16,gener:[2,24],get:[6,7,14,19],get_connected_storag:14,get_lock:6,get_storage_by_task_nam:14,get_storage_name_by_task_nam:14,get_task_inst:2,give:[18,19],global:6,grace:14,graph:24,greedi:24,handl:[19,22],have:[19,21,24],held:21,here:[23,24],hidden:22,hierarchi:21,highest:24,hold:[16,24],host:[11,12,21],id_map:14,idea:18,identifi:[6,14],ignor:24,ignore_result:[3,8],implement:[3,10,18],improt:24,index:[7,18],info:24,inform:[16,21],inherit:21,initfallbacktask:24,inittask1:24,inittask:24,insid:19,inspect:24,instanc:[2,21,24],instead:[14,24],integ:24,intuit:24,is_connect:[10,11,12,13,21],is_flow:2,json:[22,24],just:[18,19,24],kei:[18,19,21,22,24],know:24,knowledg:18,kubernet:18,kwarg:10,languag:18,last:3,let:[18,24],level:16,lexic:24,like:[19,21,24],limit:[18,21],list:[2,16,19,22,24],localhost:[11,12,24],lock:6,lock_id:6,lockpool:[0,1],log:[2,16,23],logger:16,logging_trace_func:16,logic:[21,24],look:[18,19,24],loop:7,lot:24,luigi:18,made:24,main:[15,18,24],mani:24,map:14,mark:[19,24],max_retri:[2,3,8,24],maximum:24,mean:[19,21,24],messag:16,met:24,method:21,modul:0,mongodb:[11,21],mongohost:21,mongostorag:[1,9],more:[7,18,24],msg_dict:[16,23],much:18,multipl:[7,18,21,24],my_trace_func:23,mydatabas:24,myfirstflow:24,mymongostorag:21,myproject:24,myredisstorag:21,mysqlstorag:21,mystorag:21,mytask1:24,mytask1class:24,mytask:22,name:[3,7,8,10,14,19,21,22,24],necessarili:24,need:10,nest:24,nifi:18,node:[2,3,7,10,14,15,19,22,24],node_arg:[3,7,8,10,11,12,13,14,15],node_failure:16,node_successful:16,nodes_definition_fil:2,none:[2,3,8,12,14,15,16,24],nonzero:24,note:[7,24],noth:24,now:[19,24],nowait:24,nowait_nod:2,number:[21,24],object:[2,6,7,10,14,15,16],occur:24,offer:18,omit:[19,24],onc:[5,24],once:24,onli:[18,21,22,24],oper:24,operat:24,option:[16,24],order:[18,21,22,24],organ:24,organiz:24,other:[18,19],otherwis:3,output:24,output_schema:[2,24],over:18,own:[21,24],packag:0,page:18,paramet:[2,3,6,7,8,10,14,16,22],parent:[3,7,8,15],parent_flow_result:7,parent_nam:7,parent_result:22,parent_task_result:7,pars:[18,24],part:24,particip:24,particular:[18,24],pasas:21,pass:[7,10,14,21,22,24],password:[12,21],path:[2,24],pattern:18,per:21,place:24,plan:21,point:[3,16],pool:[6,14,21],port:[11,12,21],posit:24,possibl:[15,21,24],postgr:[21,24],postgresql:24,power:18,predic:[21,24],predicate_modul:24,present:24,prevent:24,primit:18,print:[16,23],prioriti:24,propag:[22,24],propagate_compound_finish:2,propagate_compound_par:2,propagate_finish:[2,19,22,24],propagate_node_arg:[2,19,24],propagate_par:[2,24],provid:[18,24],python3:18,python:[2,16,19,23,24],queue:18,quick:18,rais:[3,4,5,14,24],read:19,receiv:24,record:10,recov:[19,24],recurs:[18,19,22,24],redi:21,redishost:21,redisstorag:[1,9],refer:[14,24],releas:6,remot:24,represent:16,request:24,requir:[21,24],resourc:[6,10],respons:8,result:[7,8,10,11,12,13,14,18,19,21,22,24],retri:[3,4,15,24],retried_count:8,retriev:[7,10,11,12,13,14,21,22],retry_countdown:[2,24],reus:[21,24],roughli:24,run:[3,7,8,14,18,19,21,22,24],safe:[21,24],same:7,satisfi:24,schedul:[3,18,24],schema:[22,24],search:18,second:[15,19,24],secretpassword:21,section:[19,24],self:[21,22],selinonlib:[18,19,24],selinontask:[0,1],selinontaskenvelop:[0,1],separ:[19,24],server:24,set:[2,14,22,24],set_celery_app:2,set_config_pi:2,set_config_yaml:2,share:[6,21],should:[2,10,14,16],shown:24,simpl:18,simpli:21,sinc:21,singl:[16,24],socket_timeout:12,solut:18,sourc:[2,3,4,5,6,7,8,10,11,12,13,14,15,16],specif:24,specifi:[18,24],split:24,spotifi:18,sql:21,sqlalchemi:[13,21],sqlstorag:[1,9],start:[15,18],state:[3,7,14,15,24],still:24,storag:[0,1,7],storage1:24,storage_connect:16,storage_disconnect:16,storage_map:2,storage_nam:14,storage_retrieve:16,storage_store:16,storagepool:[0,1],store:[2,7,10,11,12,13,14,18,21,22,24],strategy_funct:2,strict:12,string:[16,24],structur:24,subflow1:24,subflow:[7,18,22,24],subflow_schedule:16,submodul:0,subpackag:0,succe:24,succeed:19,suitabl:19,support:[18,24],system:[2,3,15,16,18],systemst:[0,1],take:[18,19],taken:6,task1:[19,24],task1_1:19,task1_2:19,task2:[19,24],task2_1:19,task2_2:19,task3:19,task3_1:19,task3_2:19,task4:19,task4_1:19,task:[3,4,7,8,10,14],task_discard_result:16,task_end:16,task_failure:16,task_id:[10,11,12,13,14,21,22],task_map:2,task_nam:[7,8,10,11,12,13,14,21,22],task_queu:2,task_retry:16,task_schedule:16,task_start:16,tend:24,than:[7,21,22],thei:[19,21,24],thi:[18,19,21,24],thing:[18,22,24],three:[19,21],thu:24,time:[3,15,19,24],to_dict:15,todo:20,tool:[18,19,24],trace:[0,1,2],trace_by_func:[2,16,23],trace_by_log:[2,16,23],trace_func:2,track:24,track_start:[3,8],transform:18,translat:[16,24],transpar:22,treat:24,trigger:[16,24],two:24,type:[7,14,19,21,22,24],unari:24,under:19,unfortun:18,uniqu:[6,10,14],unix_socket_path:12,updat:15,use:[2,24],useful:18,user:[2,7,8,10],utf:[12,13,21],valid:24,validate_result:8,valu:[21,22,24],veget:18,veri:18,version:[0,1],visual:[19,24],wai:24,wait:24,want:[18,19,22,23,24],well:24,were:[10,14,22,24],when:[18,21,24],where:18,which:[10,14,18,22,24],whole:21,within:[22,23,24],without:18,word:19,work:16,worker:[3,14,21,24],workflow:18,workload:18,would:[19,21,24],wrote:19,yaml:[2,7,18,21],you:[18,19,21,22,23,24],your:[18,19,21,22,24],zero:24},titles:["selinon","selinon package","selinon.config module","selinon.dispatcher module","selinon.fatalTaskError module","selinon.flowError module","selinon.lockPool module","selinon.selinonTask module","selinon.selinonTaskEnvelope module","selinon.storage package","selinon.storage.dataStorage module","selinon.storage.mongoStorage module","selinon.storage.redisStorage module","selinon.storage.sqlStorage module","selinon.storagePool module","selinon.systemState module","selinon.trace module","selinon.version module","Selinon - A Dynamic Task Flow Management on top of Celery","Useful Flow Patterns","A Quick Start","Storage Implementation","Task Implementation","Trace Flow Actions","YAML Configuration"],titleterms:{action:23,aggregat:19,all:19,also:18,avail:18,celeri:18,config:2,configur:24,content:[1,9],cyclic:19,datastorag:10,demo:18,diamond:19,dispatch:3,document:18,doe:18,dynam:18,entiti:24,failur:19,fataltaskerror:4,flow:[18,19,23],flowerror:5,high:18,how:18,implement:[21,22],indice:18,level:18,lockpool:6,manag:18,modul:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],mongostorag:11,need:18,overview:18,packag:[1,9],parent:19,pattern:19,permut:19,quick:20,redisstorag:12,see:18,selinon:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],selinontask:7,selinontaskenvelop:8,should:18,sqlstorag:13,start:20,storag:[9,10,11,12,13,21,24],storagepool:14,submodul:[1,9],subpackag:1,system:24,systemst:15,tabl:18,task:[18,19,22,24],top:18,trace:[16,23],useful:19,version:17,versu:19,what:18,why:18,without:19,work:18,yaml:24}})