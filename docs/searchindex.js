Search.setIndex({envversion:50,filenames:["api/modules","api/selinon","api/selinon.config","api/selinon.dispatcher","api/selinon.fatalTaskError","api/selinon.flowError","api/selinon.lockPool","api/selinon.selinonTask","api/selinon.selinonTaskEnvelope","api/selinon.storage","api/selinon.storage.dataStorage","api/selinon.storage.mongoStorage","api/selinon.storage.redisStorage","api/selinon.storage.sqlStorage","api/selinon.storagePool","api/selinon.systemState","api/selinon.trace","api/selinon.version","index","patterns","trace"],objects:{"":{selinon:[1,0,0,"-"]},"selinon.config":{Config:[2,1,1,""]},"selinon.config.Config":{celery_app:[2,2,1,""],dispatcher_queue:[2,2,1,""],edge_table:[2,2,1,""],failures:[2,2,1,""],get_task_instance:[2,2,1,""],is_flow:[2,2,1,""],max_retry:[2,2,1,""],nowait_nodes:[2,2,1,""],output_schemas:[2,2,1,""],propagate_compound_finished:[2,2,1,""],propagate_compound_parent:[2,2,1,""],propagate_finished:[2,2,1,""],propagate_node_args:[2,2,1,""],propagate_parent:[2,2,1,""],retry_countdown:[2,2,1,""],set_celery_app:[2,3,1,""],set_config_py:[2,3,1,""],set_config_yaml:[2,3,1,""],storage_mapping:[2,2,1,""],strategy_function:[2,2,1,""],task_mapping:[2,2,1,""],task_queues:[2,2,1,""],trace_by_func:[2,3,1,""],trace_by_logging:[2,3,1,""]},"selinon.dispatcher":{Dispatcher:[3,1,1,""]},"selinon.dispatcher.Dispatcher":{acks_late:[3,2,1,""],ignore_result:[3,2,1,""],max_retries:[3,2,1,""],name:[3,2,1,""],run:[3,4,1,""],track_started:[3,2,1,""]},"selinon.fatalTaskError":{FatalTaskError:[4,5,1,""]},"selinon.flowError":{FlowError:[5,5,1,""]},"selinon.lockPool":{LockPool:[6,1,1,""]},"selinon.lockPool.LockPool":{get_lock:[6,3,1,""]},"selinon.selinonTask":{SelinonTask:[7,1,1,""]},"selinon.selinonTask.SelinonTask":{finished_task_result:[7,4,1,""],parent_flow_result:[7,4,1,""],parent_task_result:[7,4,1,""],run:[7,4,1,""],storage:[7,2,1,""]},"selinon.selinonTaskEnvelope":{SelinonTaskEnvelope:[8,1,1,""]},"selinon.selinonTaskEnvelope.SelinonTaskEnvelope":{acks_late:[8,2,1,""],ignore_result:[8,2,1,""],max_retries:[8,2,1,""],name:[8,2,1,""],run:[8,4,1,""],track_started:[8,2,1,""],validate_result:[8,3,1,""]},"selinon.storage":{dataStorage:[10,0,0,"-"],mongoStorage:[11,0,0,"-"],redisStorage:[12,0,0,"-"],sqlStorage:[13,0,0,"-"]},"selinon.storage.dataStorage":{DataStorage:[10,1,1,""]},"selinon.storage.dataStorage.DataStorage":{connect:[10,4,1,""],disconnect:[10,4,1,""],is_connected:[10,4,1,""],retrieve:[10,4,1,""],store:[10,4,1,""]},"selinon.storage.mongoStorage":{MongoStorage:[11,1,1,""]},"selinon.storage.mongoStorage.MongoStorage":{connect:[11,4,1,""],disconnect:[11,4,1,""],is_connected:[11,4,1,""],retrieve:[11,4,1,""],store:[11,4,1,""]},"selinon.storage.redisStorage":{RedisStorage:[12,1,1,""]},"selinon.storage.redisStorage.RedisStorage":{connect:[12,4,1,""],disconnect:[12,4,1,""],is_connected:[12,4,1,""],retrieve:[12,4,1,""],store:[12,4,1,""]},"selinon.storage.sqlStorage":{Result:[13,1,1,""],SqlStorage:[13,1,1,""]},"selinon.storage.sqlStorage.Result":{flow_name:[13,2,1,""],id:[13,2,1,""],node_args:[13,2,1,""],result:[13,2,1,""],task_id:[13,2,1,""],task_name:[13,2,1,""]},"selinon.storage.sqlStorage.SqlStorage":{connect:[13,4,1,""],disconnect:[13,4,1,""],is_connected:[13,4,1,""],retrieve:[13,4,1,""],store:[13,4,1,""]},"selinon.storagePool":{StoragePool:[14,1,1,""]},"selinon.storagePool.StoragePool":{get:[14,4,1,""],get_connected_storage:[14,3,1,""],get_storage_by_task_name:[14,3,1,""],get_storage_name_by_task_name:[14,3,1,""],retrieve:[14,3,1,""],set:[14,3,1,""]},"selinon.systemState":{SystemState:[15,1,1,""]},"selinon.systemState.SystemState":{node_args:[15,2,1,""],to_dict:[15,4,1,""],update:[15,4,1,""]},"selinon.trace":{Trace:[16,1,1,""]},"selinon.trace.Trace":{DISPATCHER_FAILURE:[16,2,1,""],DISPATCHER_RETRY:[16,2,1,""],DISPATCHER_WAKEUP:[16,2,1,""],FALLBACK_START:[16,2,1,""],FLOW_END:[16,2,1,""],FLOW_FAILURE:[16,2,1,""],FLOW_START:[16,2,1,""],NODE_FAILURE:[16,2,1,""],NODE_SUCCESSFUL:[16,2,1,""],STORAGE_CONNECT:[16,2,1,""],STORAGE_DISCONNECT:[16,2,1,""],STORAGE_RETRIEVE:[16,2,1,""],STORAGE_STORE:[16,2,1,""],SUBFLOW_SCHEDULE:[16,2,1,""],TASK_DISCARD_RESULT:[16,2,1,""],TASK_END:[16,2,1,""],TASK_FAILURE:[16,2,1,""],TASK_RETRY:[16,2,1,""],TASK_SCHEDULE:[16,2,1,""],TASK_START:[16,2,1,""],event2str:[16,3,1,""],log:[16,3,1,""],logging_trace_func:[16,3,1,""],trace_by_func:[16,3,1,""],trace_by_logging:[16,3,1,""]},selinon:{config:[2,0,0,"-"],dispatcher:[3,0,0,"-"],fatalTaskError:[4,0,0,"-"],flowError:[5,0,0,"-"],lockPool:[6,0,0,"-"],selinonTask:[7,0,0,"-"],selinonTaskEnvelope:[8,0,0,"-"],storage:[9,0,0,"-"],storagePool:[14,0,0,"-"],systemState:[15,0,0,"-"],trace:[16,0,0,"-"],version:[17,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","classmethod","Python class method"],"4":["py","method","Python method"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:classmethod","4":"py:method","5":"py:exception"},terms:{"abstract":10,"case":3,"class":[2,3,6,7,8,10,11,12,13,14,15,16],"function":[2,16,20],"import":20,"new":[6,15,18],"return":[6,7,8,10,14,15,16],"true":[3,8,10],access:16,acks_lat:[3,8],acquir:6,action:[],adapt:10,adapter:11,addit:16,advantag:18,after:19,aggreg:19,airflow:18,all:20,alreadi:[6,20],alwai:6,anoth:19,apach:18,api:13,app:[2,3,8],appetit:18,applic:2,arg:[10,16],argument:[3,7,10,14,15,16],asked:18,automat:18,azkaban:18,base:[2,3,4,5,6,7,8,10,11,12,13,14,15,16,18,19],basic:18,becaus:[7,16],befor:19,bellow:19,block:[],bug:16,call:[16,19],can:[6,7,14,15,16,18,19,20],care:18,carri:14,celeri:[],celery_app:2,charset:12,check:[15,18],child_dispatcher_id:16,child_flow_nam:16,classmethod:[2,6,8,14,16],code:[2,18],collection_nam:11,come:18,compos:18,comput:[7,14,19],condit:18,config:[],config_cod:2,config_pi:2,configur:[2,7,14,18,19],connect:[10,11,12,13,14,16],connection_pool:12,connection_str:13,consid:19,content:[],context:14,convert:15,count:15,countdown:3,creat:18,current:[3,14,15],custom:16,data:14,databas:[7,11,14,16,19],datastorag:[],db_name:11,declar:13,deep:18,def:20,defin:[7,8,18,19,20],definit:[2,19],depend:18,desir:14,dict:[15,16],dictionari:19,discard:16,disconnect:[10,11,12,13,16],dispatch:[],dispatcher_failure:16,dispatcher_id:[15,16],dispatcher_queu:2,dispatcher_retry:16,dispatcher_wakeup:16,distribut:18,dive:18,docker:18,done:[15,20],each:[3,16,18],easier:19,echo:13,edge_t:2,empti:10,encapsul:19,encod:13,end:16,entri:3,entrypoint:7,error:[4,5,12,16],evalu:16,event2str:16,event:[16,20],exampl:[18,19],except:[4,5,14],exception:[4,5],exclus:6,execut:[10,18,19],exist:18,expect:19,ext:13,extend:18,facil:16,fact:18,fail:20,failur:[],fallback:[3,16,19],fallback_start:16,fals:[3,8,13,14],faq:18,fatal:4,fataltaskerror:[],file:[2,18],finish:[3,7,8,15,19],finished_nam:7,finished_nod:16,finished_task_result:7,first:19,flow1:19,flow:[],flow_definition_fil:2,flow_end:16,flow_failure:[16,20],flow_nam:[3,7,8,10,11,12,13,14,15,16,20],flow_start:16,flowerror:[],follow:19,forth:19,frequent:18,from:[2,7,8,10,14,16,19,20],fulli:18,func:16,gener:2,get:[6,7,14,19],get_connected_storag:14,get_lock:6,get_storage_by_task_nam:14,get_storage_name_by_task_nam:14,get_task_inst:2,give:[18,19],global:[6,20],grace:14,handl:19,have:19,hold:16,host:[11,12],id_map:14,idea:18,identifi:[6,14],ignore_result:[3,8],implement:[3,10,18],index:[7,18],info:18,inform:16,insid:19,instanc:2,instead:14,is_connect:[10,11,12,13],is_flow:2,json:[],just:[18,19],kei:[16,18,19],knowledg:18,kubernet:18,kwarg:10,languag:18,last:3,let:18,level:[],like:19,limit:18,list:[2,16,19],localhost:[11,12],lock:6,lock_id:6,lockpool:[],log:[2,16,20],logger:16,logging_trace_func:16,look:[18,19],loop:7,luigi:18,main:[15,18],map:14,mark:19,max_retri:[2,3,8,16],mean:19,messag:16,modul:[],mongodb:11,mongostorag:[],more:[7,18],msg_dict:[16,20],much:18,multipl:[7,18],my_trace_func:20,name:[3,7,8,10,14,16,19],need:[],nifi:18,node:[2,3,7,10,14,15,16,19],node_arg:[3,7,8,10,11,12,13,14,15],node_failure:16,node_id:16,node_nam:16,node_successful:16,nodes_definition_fil:2,none:[2,3,8,12,14,15,16],note:7,now:19,nowait_nod:2,object:[2,6,7,10,14,15,16],occur:16,offer:18,older:18,omit:19,onc:5,onli:18,option:[16,20],order:18,other:[18,19],otherwis:3,output_schema:2,over:18,packag:[],page:18,paramet:[2,3,6,7,8,10,14,16],parent:[],parent_flow_result:7,parent_nam:7,parent_task_result:7,pars:18,particular:18,pass:[7,10,14],password:12,path:2,pattern:[],point:[3,16],pool:[6,14],port:[11,12],possibl:15,power:18,primit:18,print:[16,20],propagate_compound_finish:2,propagate_compound_par:2,propagate_finish:[2,19],propagate_node_arg:[2,19],propagate_par:2,provid:18,python2:18,python3:18,python:[2,16,20],question:18,queue:18,quick:18,rais:[3,4,5,14],read:[16,19],record:10,record_id:16,recov:19,recurs:[18,19],redisstorag:[],refer:14,releas:6,represent:16,resourc:[6,10],respons:8,result:[7,8,10,11,12,13,14,16,18,19],retri:[3,4,15,16],retried_count:[8,16],retriev:[7,10,11,12,13,14],retry_countdown:[2,16],revisit:19,run:[3,7,8,14,16,18,19],same:7,schedul:[3,16,18],search:18,second:[15,19],section:[19,20],selinonlib:[18,19],selinontask:[],selinontaskenvelop:[],separ:19,set:[2,14],set_celery_app:2,set_config_pi:2,set_config_yaml:2,share:6,should:[],signal:16,simpl:18,singl:16,socket_timeout:12,solut:18,sourc:[2,3,4,5,6,7,8,10,11,12,13,14,15,16],specifi:18,spotifi:18,sqlalchemi:13,sqlstorag:[],start:[15,16,18],state:[3,7,14,15,16],state_dict:16,storag:[],storage_connect:16,storage_disconnect:16,storage_map:2,storage_nam:[14,16],storage_retrieve:16,storage_store:16,storagepool:[],store:[2,7,10,11,12,13,14,18],strategy_funct:2,strict:12,string:16,subflow:[7,16,18],subflow_schedule:16,submodul:[],subpackag:[],succeed:19,success:16,suitabl:19,support:18,system:[2,3,15,16,18],systemst:[],take:[18,19],taken:6,task1:19,task1_1:19,task1_2:19,task2:19,task2_1:19,task2_2:19,task3:19,task3_1:19,task3_2:19,task4:19,task4_1:19,task:[],task_discard_result:16,task_end:16,task_failure:16,task_id:[10,11,12,13,14,16],task_map:2,task_nam:[7,8,10,11,12,13,14,16],task_queu:2,task_retry:16,task_schedule:16,task_start:16,than:7,thei:19,thi:[16,18,19],thing:18,three:19,time:[3,15,16,19],to_dict:15,todo:19,tool:[18,19],trace:[],trace_by_func:[2,16],trace_by_log:[2,16],trace_func:2,track_start:[3,8],transform:18,translat:16,trigger:16,type:[7,14,19],under:19,unexpect:16,unfortun:18,uniqu:[6,10,14],unix_socket_path:12,updat:15,use:2,useful:[],user:[2,7,8,10],utf:[12,13],validate_result:8,veget:18,veri:18,version:[],visual:19,want:[18,19,20],were:[10,14],what:[],when:[16,18],where:18,which:[10,14,18],within:20,without:[],word:19,work:[],worker:[3,14],workflow:18,workload:18,would:19,write:16,wrote:19,yaml:[2,7,18],you:[18,19,20],your:[18,19]},titles:["selinon","selinon package","selinon.config module","selinon.dispatcher module","selinon.fatalTaskError module","selinon.flowError module","selinon.lockPool module","selinon.selinonTask module","selinon.selinonTaskEnvelope module","selinon.storage package","selinon.storage.dataStorage module","selinon.storage.mongoStorage module","selinon.storage.redisStorage module","selinon.storage.sqlStorage module","selinon.storagePool module","selinon.systemState module","selinon.trace module","selinon.version module","Selinon - A Dynamic Task Flow Management on top of Celery","Useful Flow Patterns","Trace Flow Actions"],titleterms:{action:20,aggregat:19,all:19,also:18,avail:18,celeri:18,config:2,content:[1,9],cyclic:19,datastorag:10,demo:18,diamond:19,dispatch:3,document:18,doe:18,dynam:18,failur:19,fataltaskerror:4,flow:[18,19,20],flowerror:5,high:18,how:18,indice:18,level:18,lockpool:6,manag:18,modul:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],mongostorag:11,need:18,overview:18,packag:[1,9],parent:19,pattern:19,permut:19,redisstorag:12,see:18,selinon:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],selinontask:7,selinontaskenvelop:8,should:18,sqlstorag:13,storag:[9,10,11,12,13],storagepool:14,submodul:[1,9],subpackag:1,systemst:15,tabl:18,task:[18,19],top:18,trace:[16,20],useful:19,version:17,versu:19,what:18,why:18,without:19,work:18}})